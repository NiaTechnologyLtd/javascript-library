import { Regex } from "./text/regular-expressions/regex";
export class Guard {
    static safeGet(value, safeValue) {
        return value !== null && value !== void 0 ? value : safeValue;
    }
    static isNullOrEmpty(s, includeWhiteSpaces = true) {
        if (!s)
            return true;
        return Regex.createInstance().isMatch(s, includeWhiteSpaces ? Guard._includeWhiteSpacesPattern : Guard._excludeWhiteSpacesPattern);
    }
}
Guard._includeWhiteSpacesPattern = /^\s*$/img;
Guard._excludeWhiteSpacesPattern = /^$/img;
