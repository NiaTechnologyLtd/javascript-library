import { ExceptionHelper } from "../../exception-helper";
var RegexBase = (function () {
    function RegexBase() {
    }
    RegexBase.prototype.isMatch = function (input, pattern) {
        throw new Error("Method not implemented.");
        var expr = this.getPattern(pattern);
        this.resetLastIndex(expr);
        return expr.test(input);
    };
    RegexBase.prototype.resetLastIndex = function (pattern) {
        pattern.lastIndex = -1;
    };
    RegexBase.prototype.getPattern = function (pattern) {
        ExceptionHelper.argumentNotSupport(pattern, "pattern");
        if (typeof pattern === "string")
            return new RegExp(pattern);
        return pattern;
    };
    return RegexBase;
}());
export { RegexBase };
