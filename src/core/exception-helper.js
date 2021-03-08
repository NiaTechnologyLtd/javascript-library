export class ExceptionHelper {
    static argumentNotSupport(argValue, argName) {
        if (!argValue) {
            argName = argName !== null && argName !== void 0 ? argName : "argName";
            console.error("异常：参数 “%s” 为 null 或者 undefined 值。", argName);
            throw new Error(`参数 “${argName}” 不可以为 null 或者 undefined 值。`);
        }
    }
}
