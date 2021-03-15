/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { KeyValuePair } from "../kvp";
/**
 * 提供了 URI 查询字符串信息相关的方法。
 * @class
 * @public
 * @extends {KeyValuePair}
 * @see {KeyValuePair}
 * @author Wang Yucai
 */
export declare class UriQueryInfo extends KeyValuePair<string, string> {
    /**
     * 用于初始化一个 UrlQueryInfo 类型的对象实例。
     * @param {String} key 查询字符串标识名称。
     * @param {String} value 查询字符串值。
     */
    constructor(key: string, value?: string);
    /**
     * 获取完成 URI 查询=字符串。
     * @override
     * @method
     * @public
     */
    toString(): string;
    /**
     * 从 location.search 字段值中获取 UriQueryInfo 对象集合。
     * @param {String} searchStr URI 查询字符串。
     * @returns {UriQueryInfo[]}
     * @method
     * @static
     * @public
     */
    static fromUriSearchString(searchStr: string): UriQueryInfo[];
}
