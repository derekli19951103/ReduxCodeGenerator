from redux_constants import *
from redux_actions import *
from redux_service import *
from redux_reducer import *
from controller_reader import *
import os
import sys


def compile_constant(redux_name, function_list, status_list, method_list):
    file = []
    imports, body, exports = Constant(redux_name, function_list, status_list).getContent()
    for i in imports:
        file.append(i)
    for b in body:
        file.append(b)
    file.append('export const ' + redux_name + 'Constants = {')
    for e, v in exports.items():
        file.append('   ' + e + ': ' + "'" + v + "'" + ',')
    file.append('}')
    return file


def compile_service(redux_name, function_list, status_list, method_list):
    file = []
    imports, body, exports = Service(redux_name, function_list, method_list).getContent()
    for i in imports:
        file.append(i)
    for b in body:
        for l in b:
            file.append(l)
        file.append('')
    file.append('export const ' + redux_name + 'Service = {')
    for e, v in exports.items():
        file.append('   ' + e + ': ' + v + ',')
    file.append('}')
    return file


def compile_actions(redux_name, function_list, status_list, method_list):
    file = []
    imports, body, exports = Action(redux_name, function_list).getContent()
    for i in imports:
        file.append(i)
    for b in body:
        for l in b:
            file.append(l)
        file.append('')
    file.append('export const ' + redux_name + 'Actions = {')
    for e, v in exports.items():
        file.append('   ' + e + ': ' + v + ',')
    file.append('}')
    return file


def compile_reducer(redux_name, function_list, status_list, method_list):
    file = []
    imports, body, exports = Reducer(redux_name, function_list, status_list).getContent()
    for i in imports:
        file.append(i)
    for b in body:
        file.append(b)
    for e in exports:
        file.append(e)
    return file


def write_combine_reducer(redux_names):
    file = []
    file.append("import { combineReducers } from 'redux';")
    for name in redux_names:
        file.append("import { " + name + " } from './" + name + "Reducer';")
    file.append("const rootReducer = combineReducers({")
    for name in redux_names:
        file.append("   " + name + ',')
    file.append("});")
    file.append("export default rootReducer;")
    return file


def compile(redux_name, function_list, status_list, method_list):
    reducer = '_reducer'
    constants = '_constants'
    actions = '_actions'
    service = '_service'
    try:
        os.mkdir(reducer)
        os.mkdir(constants)
        os.mkdir(actions)
        os.mkdir(service)
    except OSError:
        print("Already exist")
    else:
        print("Successfully created")
    with open("_constants/"+redux_name + 'Constants' + '.jsx', mode='wt', encoding='utf-8') as constants:
        constants.write('\n'.join(compile_constant(redux_name, function_list, status_list, method_list)))

    with open("_reducer/"+redux_name + 'Reducer' + '.jsx', mode='wt', encoding='utf-8') as reducer:
        reducer.write('\n'.join(compile_reducer(redux_name, function_list, status_list, method_list)))

    with open("_actions/"+redux_name + 'Actions' + '.jsx', mode='wt', encoding='utf-8') as actions:
        actions.write('\n'.join(compile_actions(redux_name, function_list, status_list, method_list)))

    with open("_service/"+redux_name + 'Service' + '.jsx', mode='wt', encoding='utf-8') as service:
        service.write('\n'.join(compile_service(redux_name, function_list, status_list, method_list)))


if __name__ == "__main__":
    status_list = ['success', 'failure', 'request']
    redux_names, function_lists, method_lists = getFunction(sys.argv[1])
    # print(redux_names)
    # print(function_lists)
    # print(method_lists)
    for i in range(len(redux_names)):
        compile(redux_names[i], function_lists[i], status_list, method_lists[i])

    with open('_reducer/index.js', mode='wt', encoding='utf-8') as index:
        index.write('\n'.join(write_combine_reducer(redux_names)))
