module.exports = { contents: "\"use strict\";\nexports.__esModule = true;\nvar tslib_1 = require(\"tslib\");\nvar React = require(\"react\");\nvar Store_1 = require(\"./Store\");\nvar Subscriptions = Store_1.getSubscriptions();\nvar Fusion = /** @class */ (function (_super) {\n    tslib_1.__extends(Fusion, _super);\n    function Fusion() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = {};\n        _this.store = Store_1.getStore();\n        return _this;\n    }\n    Fusion.prototype._hasSubscriptions = function (obj) {\n        var subscriptions = this.getConnectedStoreKeys();\n        var store = Store_1.getStore();\n        if (Array.isArray(subscriptions)) {\n            for (var key in obj) {\n                if (subscriptions.indexOf(key) > -1) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    };\n    Fusion.prototype.getConnectedStoreKeys = function () {\n        return this.constructor['$_connected_store_props'] || [];\n    };\n    Fusion.prototype._initialize = function () {\n        if (typeof this[\"init\"] === \"function\") {\n            this[\"init\"].apply(this, [this.props]);\n            return true;\n        }\n        return false;\n    };\n    Fusion.prototype.componentWillMount = function () {\n        var keys = this.getConnectedStoreKeys();\n        if (keys.length) {\n            Subscriptions.push(this);\n        }\n        this._initialize();\n    };\n    Fusion.prototype.componentWillUnmount = function () {\n        var index = Subscriptions.indexOf(this);\n        Subscriptions.splice(index, 1);\n    };\n    Fusion.prototype.componentWillReceiveProps = function (newProps) {\n        this.props = newProps;\n        this._initialize();\n    };\n    return Fusion;\n}(React.Component));\nexports.Fusion = Fusion;\n",
dependencies: ["tslib","react","./Store"],
sourceMap: {},
headerContent: undefined,
mtime: 1528486975669,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}