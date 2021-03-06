/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import { Regex } from "./text/regular-expressions/regex";

/**
 * 提供了值验证相关的辅助方法。
 * 
 * @class
 * @public
 * @author Wang Yucai
 */
export class Guard {
    private static readonly _includeWhiteSpacesPattern: RegExp = /^\s*$/img;
    private static readonly _excludeWhiteSpacesPattern: RegExp = /^$/img;

    /**
     * 当 value 等于 null 或者 undefined 时，将返回 safeValue；否则返回 value。
     * 
     * @param {any} value 需要校验的值。
     * @param {any} safeValue 当 value 等于 null 或者 undefined 时，返回的替换值。
     * @returns {any}
     * @static
     * @public
     */
    static safeGet(value: any, safeValue?: any): any {
        return value ?? safeValue;
    }

    /**
     * 用于校验字符串是否等于 null、undefined、空或者空白符。
     * @param {String} s 需要校验的字符串。
     * @param {Boolean} includeWhiteSpaces 是否需要验证空白符。
     * @returns {Boolean}
     * @method
     * @static
     * @public
     */
    static isNullOrEmpty(s?: string, includeWhiteSpaces: boolean = true): boolean {
        if (!s) return true;
        return Regex.createInstance().isMatch(s, includeWhiteSpaces ? Guard._includeWhiteSpacesPattern : Guard._excludeWhiteSpacesPattern);
    }
}