from os import listdir
from os.path import isfile, join
import re
import string

allmethod = (
    'checkout',
    'copy',
    'delete',
    'get',
    'head',
    'lock',
    'merge',
    'mkactivity',
    'mkcol',
    'move',
    'm-search',
    'notify',
    'options',
    'patch',
    'post',
    'purge',
    'put',
    'report',
    'search',
    'subscribe',
    'trace',
    'unlock',
    'unsubscribe'
)

punctuations = string.punctuation.replace('_', '')


def getFunction(path):
    function_lists = []
    method_lists = []
    redux_names = []
    for filename in listdir(path):
        if filename == '.DS_Store':
            pass

        function_list = []
        method_list = []

        if re.search(r'\bcontroller\b', filename, re.I):
            remove_controller = filename.replace(re.search(r'\bcontroller\b', filename, re.I).group(), '')
            remove_js = remove_controller.replace('js', '')
            remove_dot = remove_js.replace('.', '')
            redux_names.append(remove_dot)

        with open(path + '/' + filename) as controls:
            lines = controls.readlines()
            routes = [l for l in lines if l[:6] == 'router']
            for r in routes:
                r = r.strip()
                for m in allmethod:
                    if re.search(r"\b%s\b" % m, r, re.I):
                        method_list.append(re.search(r"\b%s\b" % m, r, re.I).group())
                segments = r.split(',')
                function_name = segments[-1].translate(str.maketrans('', '', punctuations)).strip()
                function_list.append(function_name)
            function_lists.append(function_list)
            method_lists.append(method_list)
            function_list = []
            method_list = []
    return redux_names, function_lists, method_lists


if __name__ == "__main__":
    print(getFunction('service'))
