class Reducer:
    def __init__(self, redux_name, function_list, status_list):
        self.redux_name = redux_name
        self.function_list = function_list
        self.status_list = status_list

    def case_generator(self, function_name, status):
        case_body = []
        for s in status:
            if s == 'request':
                case_body.append(
                    '   case ' + self.redux_name + 'Constants.' + function_name.upper() + '_' + s.upper() + ':')
                case_body.append('      return {')
                case_body.append('          loading: true')
                case_body.append('      };')
            if s == 'success':
                case_body.append(
                    '   case ' + self.redux_name + 'Constants.' + function_name.upper() + '_' + s.upper() + ':')
                case_body.append('      return {')
                case_body.append('          temp: action.temp')
                case_body.append('      };')
            if s == 'failure':
                case_body.append(
                    '   case ' + self.redux_name + 'Constants.' + function_name.upper() + '_' + s.upper() + ':')
                case_body.append('      return {')
                case_body.append('          error: action.error')
                case_body.append('      };')
            elif s != 'request' and s != 'success' and s != 'failure':
                case_body.append(
                    '   case ' + self.redux_name + 'Constants.' + function_name.upper() + '_' + s.upper() + ':')
                case_body.append('      return {')
                case_body.append('          ')
                case_body.append('      };')
        return case_body

    def import_generator(self):
        imports = []
        imports.append(
            'import ' + self.redux_name + 'Constants from '+"'"+'../' + '_constants' + '/' + self.redux_name + 'Constants'+"'")
        return imports

    def export_generator(self):
        exports = []
        exports.append('export function ' + self.redux_name + '(state = {}, action) {')
        exports.append('    switch (action.type) {')
        for i in range(len(self.function_list)):
            for c in self.case_generator(self.function_list[i], self.status_list):
                exports.append(c)
            exports.append('')
        exports.append('    default:')
        exports.append('        return state')
        exports.append('    }')
        exports.append('}')
        return exports

    def getContent(self):
        imports = self.import_generator()
        body = []
        exports = self.export_generator()
        return imports, body, exports


if __name__ == "__main__":
    redux_name = 'user'
    function_list = ['getAllUser', 'getOneUser']
    status_list = ['success', 'failure', 'request']
    a = Reducer(redux_name, function_list, status_list)
    imports, body, exports = a.getContent()
    print(imports)
    for i in exports:
        print(i)
