/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

/**
 * 提供了与异常相关的辅助方法。
 * 
 * @class
 * @public
 * @author Wang Yucai
 */
export class ExceptionHelper {
    /**
     * 当参数 argValue 等于 null 或者 undefined 时，将引发异常。
     * @param {any} argValue 需要校验的参数值。
     * @param {String} argName 参数名称。
     * @method
     * @static
     * @public
     */
    public static argumentNotSupport(argValue: any, argName?: String) {
        if (!argValue) {
            argName = argName ?? "argName"

            console.error("异常：参数 “%s” 为 null 或者 undefined 值。", argName);

            throw new Error(`参数 “${argName}” 不可以为 null 或者 undefined 值。`);
        }
    }
}