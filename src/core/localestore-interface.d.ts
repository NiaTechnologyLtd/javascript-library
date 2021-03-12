/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { IKeyValuePair } from "./kvp-interface";
/**
 * 定义了客户端本地存储的接口。
 * @interface
 * @public
 * @author Wang Yucai
 */
export interface ILocaleStorage {
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
     * 增加或更新指定的键值对。
     * @param {IKeyValuePair} entry 实现了 IKeyValuePair 类型接口的对象实例。
     * @see {IKeyValuePair}
     */
    addOrUpdate(entry: IKeyValuePair<string, any | undefined>): void;
    /**
     * 删除指定名称的本地存储项。
     * @param {String} name 本地存储项标识名称。
     */
    remove(name: string): void;
    /**
     * 获取指定标识名称的本地存储值。
     * @param {String} name 本地存储项标识名称。
     * @returns {any}
     */
    get(name: string): any | undefined;
}
