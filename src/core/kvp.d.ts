/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { IKeyValuePair } from "./kvp-interface";
/**
 * 提供了键值对相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 * @see {IKeyValuePair}
 */
export declare class KeyValuePair<TKey, TValue> implements IKeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
    /**
     * 用于初始化一个 KeyValuePair 类型的对象实例。
     * @param {any} key KVP 键。
     * @param {any} value KVP 值。
     */
    constructor(key: TKey, value: TValue);
}
