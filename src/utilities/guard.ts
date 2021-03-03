/**
 * 提供了与值验证相关的守护方法。
 * 
 * @class
 * @public
 * @author Wang Yucai
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class Guard {
    /**
     * 当 value 等于 null 或者 undefined 时，将返回 defaultValue 值。
     * 
     * @param {any} value 需要校验的值。
     * @param {any} safeValue 需要替换的安全值。
     * @returns {any}
     * @method
     * @static
     * @public
     */
    public static safeGet(value?: any, safeValue?: any): any {
        return value ?? safeValue;
    }
}