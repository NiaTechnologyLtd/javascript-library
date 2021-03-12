/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { Guard } from "../../core/guard";
/**
 * 提供了身份信息点相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class Claim {
    /**
     * 用于初始化一个 Claim 类型的对象实例。
     * @param {String | ClaimTypes} name 身份信息点名称。
     * @param {String} value 身份信息点值。
     * @constructor
     * @public
     */
    constructor(name, value) {
        this.name = name;
        this.value = Guard.safeGet(value, "");
    }
    /**
     * 用于校验此信息点是否确实必要信息。
     * @public
     * @method
     * @returns {Boolean}
     */
    isValid() {
        return !Guard.isNullOrEmpty(this.name) && !Guard.isNullOrEmpty(this.value);
    }
}
