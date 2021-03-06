import { ExceptionHelper } from "../exception-helper";
var Configuration = (function () {
    function Configuration() {
    }
    Configuration.prototype.get = function (name) {
        if (this.exist(name)) {
            return process.env[name];
        }
        return undefined;
    };
    Configuration.prototype.exist = function (name) {
        ExceptionHelper.argumentNotSupport(name, "name");
        if (process.env[name])
            return true;
        return false;
    };
    return Configuration;
}());
export { Configuration };
