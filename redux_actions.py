class Action:
    def __init__(self, redux_name, function_list):
        self.redux_name = redux_name
        self.function_list = function_list

    def function_generator(self, function_name):
        function_body = []
        function_body.append('function _' + function_name + '() {')
        function_body.append('  return dispatch => {')
        function_body.append('      dispatch(request());')
        function_body.append('      ' + self.redux_name + 'Service.' + function_name + '()')
        function_body.append('      .then(')
        function_body.append('          temp => { ')
        function_body.append("              dispatch(success(temp));")
        function_body.append("          },")
        function_body.append("          error => {")
        function_body.append("              dispatch(failure(error.toString()));")
        function_body.append("          }")
        function_body.append("      );")
        function_body.append("  };")
        function_body.append(
            "  function request() { return { type: " + self.redux_name + "Constants." + function_name.upper() + "_REQUEST } }")
        function_body.append(
            "  function success(temp) { return { type: " + self.redux_name + "Constants." + function_name.upper() + "_SUCCESS, temp } }")
        function_body.append(
            "  function failure(error) { return { type: " + self.redux_name + "Constants." + function_name.upper() + "_SUCCESS, error } }")
        function_body.append("}")
        return function_body

    def body_generator(self):
        body = []
        for i in range(len(self.function_list)):
            body.append(self.function_generator(self.function_list[i]))
        return body

    def import_generator(self):
        imports = []
        imports.append(
            'import ' + self.redux_name + 'Service from ''../' + '_service' + '/' + self.redux_name + 'Service')
        imports.append(
            'import ' + self.redux_name + 'Constants from ''../' + '_constants' + '/' + self.redux_name + 'Constants')
        return imports

    def export_generator(self):
        exports = {}
        for f in self.function_list:
            exports[f] = '_' + f
        return exports

    def getContent(self):
        imports = self.import_generator()
        body = self.body_generator()
        exports = self.export_generator()
        return imports, body, exports


if __name__ == "__main__":
    redux_name = 'user'
    function_list = ['getAllUser', 'getOneUser']
    a = Action(redux_name, function_list)
    imports, body, exports = a.getContent()
    for l in body[0]:
        print(l)
    print(imports)
    print(exports)
