import { ExceptionHelper } from "../../exception-helper";
export class RegexBase {
    isMatch(input, pattern) {
        throw new Error("Method not implemented.");
        let expr = this.getPattern(pattern);
        this.resetLastIndex(expr);
        return expr.test(input);
    }
    resetLastIndex(pattern) {
        pattern.lastIndex = -1;
    }
    getPattern(pattern) {
        ExceptionHelper.argumentNotSupport(pattern, "pattern");
        if (typeof pattern === "string")
            return new RegExp(pattern);
        return pattern;
    }
}
