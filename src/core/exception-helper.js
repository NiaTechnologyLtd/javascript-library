var ExceptionHelper = (function () {
    function ExceptionHelper() {
    }
    ExceptionHelper.argumentNotSupport = function (argValue, argName) {
        if (!argValue) {
            argName = argName !== null && argName !== void 0 ? argName : "argName";
            console.error("异常：参数 “%s” 为 null 或者 undefined 值。", argName);
            throw new Error("\u53C2\u6570 \u201C" + argName + "\u201D \u4E0D\u53EF\u4EE5\u4E3A null \u6216\u8005 undefined \u503C\u3002");
        }
    };
    return ExceptionHelper;
}());
export { ExceptionHelper };
