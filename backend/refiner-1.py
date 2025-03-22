import cohere
import os
from dotenv import load_dotenv, dotenv_values

load_dotenv()

CO_API_KEY = os.environ.get("CO_API_KEY")
co = cohere.ClientV2(CO_API_KEY)

prompt_rubric = '''

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

response = co.chat(model="command-a-03-2025", messages=[{"role": "user", "content": prompt_rubric}])
print(response.message.content[0].text)

prompt = '''explain object-oriented programming'''
prompt = prompt + 'Improve this prompt using the Prompt Rubric, with the response being a string of the new prompt only.'

response = co.chat(model="command-a-03-2025", messages=[{"role": "user", "content": prompt}])
print(response.message.content[0].text)