module.exports = { contents: "\"use strict\";\nexports.__esModule = true;\nvar tslib_1 = require(\"tslib\");\nvar index_1 = require(\"./index\");\nvar Store_1 = require(\"./Store\");\nvar React = require(\"react\");\nvar ReactDOM = require(\"react-dom\");\nvar MyStore = /** @class */ (function () {\n    function MyStore() {\n        this.user = {\n            name: \"Bob\",\n            email: \"bob@gmail.eomc\",\n            age: 0\n        };\n    }\n    return MyStore;\n}());\nStore_1.createStore(MyStore);\nvar MyRootComponent = /** @class */ (function (_super) {\n    tslib_1.__extends(MyRootComponent, _super);\n    function MyRootComponent() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    MyRootComponent.prototype.render = function () {\n        return (React.createElement(\"div\", null,\n            React.createElement(\"input\", { type: \"button\" }),\n            React.createElement(MyUser, null),\n            React.createElement(Controls, null)));\n    };\n    return MyRootComponent;\n}(index_1.Fusion));\nvar Controls = /** @class */ (function (_super) {\n    tslib_1.__extends(Controls, _super);\n    function Controls() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    Controls.prototype[\"delete\"] = function () {\n        Store_1.dispatch(\"user\", function () { return undefined; });\n    };\n    Controls.prototype.create = function () {\n        Store_1.dispatch(\"user\", function () { return ({ name: \"John\", age: 14 }); });\n    };\n    Controls.prototype.incrementAge = function () {\n        Store_1.dispatch(\"user\", function (user) {\n            user.age++;\n            return user;\n        });\n    };\n    Controls.prototype.render = function () {\n        var _this = this;\n        return (React.createElement(\"div\", null,\n            React.createElement(\"hr\", null),\n            React.createElement(\"div\", null,\n                \"Controls\",\n                React.createElement(\"input\", { type: \"button\", value: \"delete user\", onClick: function () { return _this[\"delete\"](); } }),\n                React.createElement(\"input\", { type: \"button\", value: \"create user\", onClick: function () { return _this.create(); } }),\n                React.createElement(\"input\", { type: \"button\", value: \"incrementAge11\", onClick: function () { return _this.incrementAge(); } }))));\n    };\n    return Controls;\n}(index_1.Fusion));\nvar MyUser = /** @class */ (function (_super) {\n    tslib_1.__extends(MyUser, _super);\n    function MyUser() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    MyUser.prototype.init = function () { };\n    MyUser.prototype.render = function () {\n        return (React.createElement(\"div\", null,\n            this.store.user && React.createElement(\"div\", null,\n                \"User: \",\n                this.store.user.name,\n                \"  -> \",\n                this.store.user.age),\n            !this.store.user && React.createElement(\"div\", null, \"User deleted\")));\n    };\n    MyUser = tslib_1.__decorate([\n        Store_1.connect(\"user\")\n    ], MyUser);\n    return MyUser;\n}(index_1.Fusion));\nReactDOM.render(React.createElement(MyRootComponent, null), document.querySelector('#root'));\n",
dependencies: ["tslib","./index","./Store","react","react-dom"],
sourceMap: {},
headerContent: undefined,
mtime: 1528562815771,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}