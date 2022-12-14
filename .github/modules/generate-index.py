import os
import json
import requests
from jinja2 import Environment, FileSystemLoader
import github3


BASE_URL      = 'https://api.github.com/repos/DNXLabs/'
RELEASES_PATH = '/releases/latest'
GITHUB_TOKEN  = os.environ['GITHUB_TOKEN']

# Connect to GitHub API
github = github3.login(token=GITHUB_TOKEN)
modules_array = [repository.as_dict()['name'] for repository in github.repositories_by('DNXLabs')]


input_file    = open('repos.json')
json_obj      = json.load(input_file)
clis_array    = json_obj['clis']
tools_array   = json_obj['tools']
modules_array = json_obj['modules']


def create_array(array):
    objects = []
    for item in array:
        print(BASE_URL + item + RELEASES_PATH)
        response_repo    = requests.get(BASE_URL + item, headers={"Authorization": "token " + GITHUB_TOKEN})
        response_release = requests.get(BASE_URL + item + RELEASES_PATH, headers={"Authorization": "token " + GITHUB_TOKEN})

        if 'description' in json.loads(response_repo.text):
            repo_json_obj = json.loads(response_repo.text)

        if 'tag_name' in json.loads(response_release.text):
            release_json_obj = json.loads(response_release.text)
            obj = {
                "name":        item,
                "description": repo_json_obj['description'],
                "short_name":  item,
                "html_url":    release_json_obj['html_url'],
                "tag_name":    release_json_obj['tag_name'],
                "tarball_url": release_json_obj['tarball_url'],
                "zipball_url": release_json_obj['zipball_url'],
                "id":          release_json_obj['id']
            }
            print(json.loads(response_release.text)['tag_name'])

            objects.append(obj)
    return objects


modules = create_array(modules_array)

# root          = os.path.dirname(os.path.abspath(__file__))
# templates_dir = os.path.join(root, 'templates')
# env           = Environment( loader = FileSystemLoader(templates_dir) )
# template      = env.get_template('modules.html')

# filename = os.path.join(root, 'index.html')
# with open(filename, 'w') as fh:
#     fh.write(template.render(
#         modules = modules
#     ))

api_filename = 'api.json'
api_data = {}
api_data['modules'] = {}


for module in modules:
    api_data['modules'][module['name']] = module

with open(api_filename, 'w') as outfile:
    outfile.write(json.dumps(api_data, sort_keys=True, indent=4))