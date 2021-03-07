import { ExceptionHelper } from "../exception-helper";
export class Configuration {
    get(name) {
        if (this.exist(name)) {
            return process.env[name];
        }
        return undefined;
    }
    exist(name) {
        ExceptionHelper.argumentNotSupport(name, "name");
        if (process.env[name])
            return true;
        return false;
    }
    static createInstance() {
        if (!Configuration._instance) {
            Configuration._instance = new Configuration();
        }
        return Configuration._instance;
    }
}
Configuration._instance = undefined;
