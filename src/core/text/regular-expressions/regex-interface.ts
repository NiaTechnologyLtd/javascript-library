/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

/**
 * 定义了正则表达式匹配相关的接口。
 * 
 * @interface
 * @public
 * @author Wang Yucai
 */
export interface IRegex {
    /**
     * 用于校验字符串 input 是否与模式 pattern 匹配。如果匹配则返回 true；否则返回 false。
     * 
     * @param {String} input 需要验证的字符串。
     * @param {RegExp | String} pattern 正则表达式或者正则表达式字符串。
     * @returns {Boolean}
     * @method
     */
    isMatch(input: string, pattern: RegExp | string): Boolean;
}