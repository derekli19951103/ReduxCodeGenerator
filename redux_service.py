class Service:
    def __init__(self, redux_name, function_list, method_list):
        self.redux_name = redux_name
        self.function_list = function_list
        self.method_list = method_list

    def function_generator(self, function_name, method):
        function_body = []
        function_body.append('function _' + function_name + '() {')
        function_body.append('  const requestOptions = {')
        function_body.append('      method: ' + method.upper() + ',')
        function_body.append('      headers:{ },')
        function_body.append('      body:{ }')
        function_body.append('  };')
        function_body.append("  return fetch('',requestOptions);")
        function_body.append("}")
        return function_body

    def body_generator(self):
        body = []
        if len(self.function_list) != len(self.method_list):
            raise Exception('every function needs a request method')
        for i in range(len(self.function_list)):
            body.append(self.function_generator(self.function_list[i], self.method_list[i]))
        return body

    def export_generator(self):
        exports = {}
        for f in self.function_list:
            exports[f] = '_' + f
        return exports

    def getContent(self):
        imports = []
        body = self.body_generator()
        exports = self.export_generator()
        return imports, body, exports


if __name__ == "__main__":
    redux_name = 'user'
    function_list = ['getAllUser', 'getOneUser']
    method_list = ['post', 'get']
    s = Service(redux_name, function_list, method_list)
    print(s.getContent())
    print([print(i) for i in s.getContent()[1][0]])
