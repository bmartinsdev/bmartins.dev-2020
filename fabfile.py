from fabric import Connection, task
from invoke import run as local
import sys
sys.path.append('..')
import variables
lugh = Connection(
    variables.server, 
    port=variables.port, 
    user=variables.username, 
    connect_kwargs={
        'password': variables.password,
        'key_filename': variables.sshKeyPath
        }
    )

def commit(msg):
    local('git add . && git commit -m "{}"'.format(msg))

def updateProduction():
    lugh.execute("cd ~/lugh-website && git reset --hard origin/Deploy && git pull")
    lugh.execute("test -f ~/lugh-website/public_html/index.html && rm -rf ~/public_html/* && mv ~/lugh-website/public_html/* ~/public_html/")

def build(msg):
    return local('ng build --prod --output-path=../deploy/public_html && cd ../deploy && git add . && git commit -m "{}" && git push origin Deploy --force'.format(msg))

@task 
def setup(context):
    local("cd .. && mkdir deploy && cd deploy && git clone --single-branch --branch Deploy git@gitlab.com:brodriguespt/lugh-website.git .")

@task
def deploy(context, msg):
    if msg:
        commit(msg)
    else:
        print("No commit message")
        return
    changes = build(msg)
    if not changes.stdout.seek('tree clean'):
        updateProduction()