import cohere
from flask import Flask, jsonify, request
from flask_cors import CORS

CO_API_KEY = "iV47bx7aPOKOfHF9LZzN7ie5HFvwRSxMOt8OwJTK" # get this from https://dashboard.cohere.com/

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from your React app


def get_cohere_response(role, in_message):
    co = cohere.ClientV2(CO_API_KEY)

    response = co.chat(model="command-a-03-2025", messages=[{"role": role, "content": in_message}])

    return response


@app.route('/api/submit', methods=['POST'])
def get_cohere_improved_prompt():
    content = request.json

    user_prompt = content["received"]["text"]

    print('Received data:', content)

    return jsonify({'status': 'success', 'received': content}), 201



if __name__ == "__main__":
    co = cohere.ClientV2(CO_API_KEY)

    response = co.chat(model="command-a-03-2025", messages=[{"role": "user", "content": "tell me about university of toronto"}])

    print(response)