/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { ExceptionHelper } from "../../exception-helper";
/**
 * 提供了正则表达式匹配相关的基本方法。
 *
 * @class
 * @abstract
 * @public
 * @see IRegex
 * @author Wang Yucai
 */
export class RegexBase {
    isMatch(input, pattern) {
        throw new Error("Method not implemented.");
        let expr = this.getPattern(pattern);
        this.resetLastIndex(expr);
        return expr.test(input);
    }
    /**
     * 重置正则表达式的 LastIndex 属性。
     *
     * @param {RegExp} pattern 正则表达式。
     * @method
     * @protected
     */
    resetLastIndex(pattern) {
        pattern.lastIndex = -1;
    }
    /**
     * 获取合法的正则表达式。
     *
     * @param {String | RegExp} pattern 正则表达式。
     * @returns {RegExp}
     * @method
     * @protected
     */
    getPattern(pattern) {
        ExceptionHelper.argumentNotSupport(pattern, "pattern");
        if (typeof pattern === "string")
            return new RegExp(pattern);
        return pattern;
    }
}
