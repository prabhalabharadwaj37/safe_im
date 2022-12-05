# Safe IM
## Client
- Simple react script to mimick a chat between 2 clients. 
- Messages are sent from Sender to Receiver. In this process, any profanity is filtered via the profanity NLP library in the backend. 

#3 Server
- Basic flask application containing a POST method that processes and identifies the profanity in the messages. Such words are replaced with * for each character in the word. 

## Limitations
- Supports only english language to filter words. 
- Complex obscene sentances can be difficult to detect. 

## Benefits of the PoC
- Today, bullying on social or messaging platforms is rampant among children typically in middle/high schools. This causes lack of self esteem and depression among the younger generation. Applications implementing such a feature can help reduce the burden of such bullying on young children. Parents can enforce the usage of applications that have this feature built-in and can toggle it as needed. 

## Usage
1. Client: 
    - npm start

2. Server:
    - pip install profanity_filter
    - pip install spacy
    - python -m spacy download en