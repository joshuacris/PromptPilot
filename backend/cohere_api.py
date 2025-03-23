import cohere
from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

CO_API_KEY = "iV47bx7aPOKOfHF9LZzN7ie5HFvwRSxMOt8OwJTK" # get this from https://dashboard.cohere.com/

app = Flask(__name__)
CORS(app) 
co = cohere.ClientV2(CO_API_KEY)

def engineer_context(prompt_type: str) -> str:
    if prompt_type == 'EDUCATIONAL':
        return '''You are to memorize the following Context Rubric for future prompts only.
        Context Rubric:
        1. If the prompt asks for a direct answer, implement guide rails in the prompt to prevent a direct answer.
        2. Ensure the prompt will activate chain-of-thought prompting when obtaining a response.'''
    elif prompt_type == 'PROBLEM-SOLVING':
        return '''You are to memorize the following Context Rubric for future prompts only.
        Context Rubric:
        1. If the prompt asks for a direct answer or multiple choice, use zero-shot prompting in the prompt
        2. If the prompt asks to solve a complicated problem, use meta prompting in the prompt'''
    else: # prompt_type == EVERYDAY
        return '''You are to memorize the following Context Rubric for future prompts only.
        Context Rubric:
        1. Ensure the prompt will activate few-shot prompting when obtaining a response
        2. Make the prompt elicit a concise response without overcomplicating it.'''


def get_cohere_response(role, in_message):

    response = co.chat(model="command-a-03-2025", messages=[{"role": role, "content": in_message}])

    return response


@app.route('/improve_prompt', methods=['POST'])
def get_cohere_improved_prompt():
    try:
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

        8. If there is code included, label the prompt at the top and include ALL the code below the prompt.

        9. Finally, please do not apply it to this prompt. Memorize the Prompt Rubric for future prompts.
        '''

        PROMPT_ADDON = '''
        \n Improve this prompt using the Prompt Rubric, with the response being a string of the new prompt only. 

        If there is code included, put the prompt at the top and include ALL the code below the prompt.

        Do not include **Improved Prompt**
        '''

        content = request.json

        user_prompt = content["input"]
        user_prompt = content["option"]

        PROMPT_TYPE = engineer_context('PROBLEM-SOLVING')
        USER_PROMPT_FINAL = user_prompt + PROMPT_ADDON

        pipeline = [PROMPT_RUBRIK, PROMPT_TYPE, USER_PROMPT_FINAL]

        for step in pipeline:
            response = co.chat(model="command-a-03-2025", messages=[{"role": "user", "content": step}])

        filtered_reponse = response.message.content[0].text

        return jsonify({'status': 'success', 'improved_prompt': filtered_reponse}), 201
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 400


if __name__ == "__main__":

    app.run(debug=True)