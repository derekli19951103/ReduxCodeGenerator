class Constant:
    def __init__(self, redux_name, function_list, status_list):
        self.redux_name = redux_name
        self.function_list = function_list
        self.status_list = status_list

    def export_generator(self):
        constants = {}
        redux_name_upper = self.redux_name.upper()
        for f in self.function_list:
            function_upper = f.upper()
            for s in self.status_list:
                status_upper = s.upper()
                key = function_upper + '_' + status_upper
                value = redux_name_upper + '_' + function_upper + '_' + status_upper
                constants[key] = value
        return constants

    def getContent(self):
        imports = []
        body = []
        exports = self.export_generator()
        return imports, body, exports


if __name__ == "__main__":
    redux_name = 'user'
    function_list = ['getAllUser', 'getOneUser']
    status_list = ['success', 'failure', 'request']
    c = Constant(redux_name, function_list, status_list)
    print(c.getContent())
