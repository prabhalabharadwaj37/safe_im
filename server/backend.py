from flask import Flask
from flask import request, abort, make_response, jsonify
import json
from flask_cors import CORS
from profanity_filter import ProfanityFilter

app = Flask(__name__)
CORS(app)

pf = ProfanityFilter()

# Default endpoint
@app.route('/')
def index():
    print(request.json)
    return "Welcome to Safe IM platform!"

# API that cleans the message and responds back
@app.route("/clean_message", methods=['POST'])
def clean_message():
    print("Origin: ", request.headers['Origin'])
    return {'response': pf.censor(request.json['message'])}

if __name__ == '__main__':
    app.run(debug=True)