import cohere
from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

CO_API_KEY = os.environ.get("CO_API_KEY")# get this from https://dashboard.cohere.com/

app = Flask(__name__)
CORS(app) 
co = cohere.ClientV2(CO_API_KEY)
PROMPT_RUBRIK = '''

Given a prompt, can you please improve it so that it follows the Prompt Rubric:

1. First, break the prompt into sequential steps: Eg. First [do something], then [do something]. Finally, [do something].

2. Then, provide necessary context or background information. Eg. Report card. Which report card? For elementary students in Brazil?

3. Afterwards, assign a role to the AI model. Eg. Imagine you are a teacher and I am a student. Please explain Newton’s Law.

4. After this, specify the tone (Please use constructive tone, related to roles: whose perspective
should the response be written from and who is the audience.). If possible, use action words to be more specific.

5. If there are no examples, add an example when applicable.

6. Explicitly say format of the response expected (bullet points, tables, code, etc).

7. Include this at the end of the prompt: “Please do not assume anything, ask me any
clarification questions if need be.

8. Finally, please do not apply it to this prompt. Memorize the Prompt Rubric for future prompts.
'''


def get_cohere_response(role, in_message):

    response = co.chat(model="command-a-03-2025", messages=[{"role": role, "content": in_message}])

    return response


@app.route('/improve_prompt', methods=['POST'])
def get_cohere_improved_prompt():
    try:

        content = request.json

        user_prompt = content["input"]

        print(user_prompt)

        co.chat(model="command-a-03-2025", messages=[{"role": "user", "content": PROMPT_RUBRIK}])

        prompt = user_prompt + ' \n Improve this prompt using the Prompt Rubric, with the response being a string of the new prompt only.'

        print(prompt)

        response = co.chat(model="command-a-03-2025", messages=[{"role": "user", "content": prompt}])

        filtered_reponse = response.message.content[0].text

        print(response)

        return jsonify({'status': 'success', 'improved_prompt': response}), 201
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 400


if __name__ == "__main__":

    app.run(debug=True)