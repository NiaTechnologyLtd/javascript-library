/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { Guard } from "./guard";
import { Regex } from "./text/regular-expressions/regex";
const store = require("store2");
/**
 * 提供了基于 store2 的本地存储相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 * @see {store2}
 */
export class LocaleStorageProvider {
    /**
     * 校验本地存储标识名称的格式，并完善。
     * @param {String} name 需要校验的标识名称。
     * @returns {String}
     * @private
     * @method
     */
    verifyAndFillName(name) {
        return Regex.createInstance().isMatch(name, /^_+ls_+/gim)
            ? name
            : `__ls__${name}`;
    }
    exists(name) {
        if (Guard.isNullOrEmpty(name)) {
            console.warn("警告：空的本地存储标识名称 “name”。");
            return false;
        }
        return store.has(this.verifyAndFillName(name));
    }
    addOrUpdate(name, value) {
        if (Guard.isNullOrEmpty(name) || !value) {
            console.warn("警告：不满足本地存储要求，此次请求忽略。");
            return;
        }
        store.set(this.verifyAndFillName(name), value, true);
    }
    remove(name) {
        throw new Error("Method not implemented.");
    }
    get(name) {
        throw new Error("Method not implemented.");
    }
}
