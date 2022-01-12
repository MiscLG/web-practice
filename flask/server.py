from flask import Flask
from flask import request
app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route('/hello/<username>', methods=['GET', 'POST'])
def hello(username):
    if request.method == 'POST':
        return f'Hello {username}'
    else:
        return "add your name to the url"
