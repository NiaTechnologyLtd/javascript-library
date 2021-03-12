/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { IRegex } from "./regex-interface";
/**
 * 提供了正则表达式匹配相关的基本方法。
 *
 * @class
 * @abstract
 * @public
 * @see IRegex
 * @author Wang Yucai
 */
export declare abstract class RegexBase implements IRegex {
    isMatch(input: string, pattern: string | RegExp): boolean;
    /**
     * 重置正则表达式的 LastIndex 属性。
     *
     * @param {RegExp} pattern 正则表达式。
     * @method
     * @protected
     */
    protected resetLastIndex(pattern: RegExp): void;
    /**
     * 获取合法的正则表达式。
     *
     * @param {String | RegExp} pattern 正则表达式。
     * @returns {RegExp}
     * @method
     * @protected
     */
    protected getPattern(pattern: string | RegExp): RegExp;
}
