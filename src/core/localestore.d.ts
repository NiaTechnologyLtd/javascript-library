/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
/**
 * 提供了基于 store2 的本地存储相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 * @see {store2}
 */
export declare class LocaleStorageProvider {
    private readonly _internalStorageProvider;
    /**
     * 用于初始化一个 LocaleStorageProvider 类型的对象实例。
     * @param {Boolean} useSessionStorage 是否使用本地回话存储。
     */
    constructor(useSessionStorage?: boolean);
    /**
     * 获取指定标识名称的本地存储值。
     * @param {String} name 本地存储项标识名称。
     * @returns {any}
     */
    get(name: string): any | undefined;
    /**
     * 校验本地存储标识名称的格式，并完善。
     * @param {String} name 需要校验的标识名称。
     * @returns {String}
     * @private
     * @method
     */
    private verifyAndFillName;
    /**
     * 用于校验指定名称的存储项是否存在。
     * @param {String} name 指定的本地存储项标识名称。
     * @returns {Boolean}
     */
    exists(name: string): boolean;
    /**
     * 增加或更新指定名称的本地存储项。
     * @param {String} name 本地存储项标识名称。
     * @param {any} value 本地存储项的值。
     */
    addOrUpdate(name: string, value?: any): void;
    /**
     * 删除指定名称的本地存储项。
     * @param {String} name 本地存储项标识名称。
     */
    remove(name: string): void;
}
/**
 * 本地存储服务。
 * @constant
 * @public
 * @author Wang Yucai
 */
export declare const LocaleStore: LocaleStorageProvider;
/**
 * 本地会话存储服务。
 * @constant
 * @public
 * @author Wang Yucai
 */
export declare const SessionStore: LocaleStorageProvider;
