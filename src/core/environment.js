import { Configuration } from "./configuration/configuration";
import { EnvironmentNames } from "./environment-names";
import { Guard } from "./guard";
export class Environment {
    constructor() {
        this._configSectionName = "NODE_ENV";
    }
    get currentEnvironment() {
        return Guard.safeGet(Configuration.createInstance().get(this._configSectionName), Environment.DefaultEnvironmentName.toString()).toLowerCase();
    }
    get isProduction() {
        return this.currentEnvironment === EnvironmentNames.production.toString();
    }
    get isTesting() {
        return this.currentEnvironment === EnvironmentNames.testing.toString();
    }
    get isDevelopment() {
        return this.currentEnvironment === EnvironmentNames.development.toString();
    }
}
Environment.DefaultEnvironmentName = EnvironmentNames.production;
