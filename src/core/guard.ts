/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

/**
 * 提供了值验证相关的辅助方法。
 * 
 * @class
 * @public
 * @author Wang Yucai
 */
export class Guard {
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
}