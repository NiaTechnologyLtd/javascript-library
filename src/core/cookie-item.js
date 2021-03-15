/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import Cookies from "js-cookie";
import { ExceptionHelper } from "./exception-helper";
import { Guard } from "./guard";
/**
 * 提供了 Cookie 条目相关的属性、方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class CookieItem {
    /**
     * 用于初始化一个 constructor 类型的对象实例。
     * @param {String} key Cookie 标识名称。
     * @param {String} value Cookie 值。
     * @param {Number | Date} expires Cookie 超时值。
     * @param {Boolean} secure Cookie 是否需要加密。
     * @param {String} domain Cookie 适用的域名。
     * @param {String} path Cookie 的路径。
     */
    constructor(key, value, expires, secure = true, domain, path = "/") {
        /**
         * 设置或获取一个值，用于表示 Cookie 值是否需要加密。
         * @property
         * @type {Boolean}
         * @public
         */
        this.secure = true;
        /**
         * 设置或获取一个字符串，用于表示 Cookie 适用的域名。
         * @property
         * @type {Boolean}
         * @public
         */
        this.domain = window.location.hostname;
        /**
         * 设置或获取一个字符串，用于表示 Cookie 适用的路径。
         * @property
         * @type {String}
         * @public
         */
        this.path = "/";
        this.key = key;
        this.value = value;
        this.expires = expires;
        this.secure = secure;
        this.domain = domain;
        this.path = path;
    }
    /**
     * 获取一个值，用于表示 Cookie 是否包含值。
     * @property
     * @readonly
     * @type {Boolean}
     * @public
     */
    get hasValue() {
        return !Guard.isNullOrEmpty(this.value, false);
    }
    /**
     * 构建 Cookie 存储配置选项。
     * @protected
     * @returns {any}
     */
    buildOptions() {
        let options = { domain: this.domain, path: this.path, secure: this.secure };
        return this.expires
            ? Object.assign({}, options, { expires: this.expires })
            : options;
    }
    /**
     * 保存 Cookie 值到本地。
     * @method
     * @public
     */
    save() {
        if (!Guard.isNullOrEmpty(this.key) &&
            !Guard.isNullOrEmpty(this.value, false)) {
            Cookies.set(this.key, Guard.safeGet(this.value, "").toString(), this.buildOptions());
        }
    }
    /**
     * 获取指定标识名称的 Cookie 项。
     * @param {String} key Cookie 标识名称。
     * @returns {CookieItem}
     * @static
     * @public
     */
    static get(key) {
        ExceptionHelper.argumentNotSupport(key, "key");
        let value = Cookies.get(key);
        return new CookieItem(key, value);
    }
    /**
     * 删除指定标识名称的 Cookie 值。
     * @param {String} key Cookie 标识名称。
     * @public
     * @static
     */
    static remove(key) {
        if (!Guard.isNullOrEmpty(key))
            return;
        Cookies.remove(key);
    }
}
