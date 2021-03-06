import { Regex } from "./text/regular-expressions/regex";
var Guard = (function () {
    function Guard() {
    }
    Guard.safeGet = function (value, safeValue) {
        return value !== null && value !== void 0 ? value : safeValue;
    };
    Guard.isNullOrEmpty = function (s, includeWhiteSpaces) {
        if (includeWhiteSpaces === void 0) { includeWhiteSpaces = true; }
        if (!s)
            return true;
        return Regex.createInstance().isMatch(s, includeWhiteSpaces ? Guard._includeWhiteSpacesPattern : Guard._excludeWhiteSpacesPattern);
    };
    Guard._includeWhiteSpacesPattern = /^\s*$/img;
    Guard._excludeWhiteSpacesPattern = /^$/img;
    return Guard;
}());
export { Guard };
