import { Configuration } from "./configuration/configuration";
import { EnvironmentNames } from "./environment-names";
import { Guard } from "./guard";
var Environment = (function () {
    function Environment() {
        this._configSectionName = "NODE_ENV";
    }
    Object.defineProperty(Environment.prototype, "currentEnvironment", {
        get: function () {
            return Guard.safeGet(Configuration.createInstance().get(this._configSectionName), Environment.DefaultEnvironmentName.toString()).toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "isProduction", {
        get: function () {
            return this.currentEnvironment === EnvironmentNames.production.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "isTesting", {
        get: function () {
            return this.currentEnvironment === EnvironmentNames.testing.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "isDevelopment", {
        get: function () {
            return this.currentEnvironment === EnvironmentNames.development.toString();
        },
        enumerable: false,
        configurable: true
    });
    Environment.DefaultEnvironmentName = EnvironmentNames.production;
    return Environment;
}());
export { Environment };
