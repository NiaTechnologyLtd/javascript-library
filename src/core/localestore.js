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
     * 用于初始化一个 LocaleStorageProvider 类型的对象实例。
     * @param {Boolean} useSessionStorage 是否使用本地回话存储。
     */
    constructor(useSessionStorage = false) {
        this._useSessionStorage = false;
        this._internalStorageProvider = undefined;
        this._useSessionStorage = useSessionStorage;
        this._internalStorageProvider = useSessionStorage ? store.session : store;
    }
    get(name) {
        if (Guard.isNullOrEmpty(name) || !this.exists(name)) {
            console.warn("警告：空的本地存储标识名称，未能找到指定的存储项数据值。");
            return undefined;
        }
        return this._internalStorageProvider.get(this.verifyAndFillName(name));
    }
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
            console.warn("警告：空的本地存储标识名称。");
            return false;
        }
        return this._internalStorageProvider.has(this.verifyAndFillName(name));
    }
    addOrUpdate(name, value) {
        if (Guard.isNullOrEmpty(name) || !value) {
            console.warn("警告：不满足本地存储要求，此次请求忽略。");
            return;
        }
        this._internalStorageProvider.set(this.verifyAndFillName(name), value, true);
    }
    remove(name) {
        if (Guard.isNullOrEmpty(name)) {
            console.warn("警告：空的本地存储标识名称。");
            return;
        }
        this._internalStorageProvider.remove(this.verifyAndFillName(name));
    }
}
