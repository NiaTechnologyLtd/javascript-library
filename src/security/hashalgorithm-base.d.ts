/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { IHashAlgorithm } from "./hashalgorithm-interface";
/**
 * 提供了哈希算法相关的基本方法。
 * @class
 * @abstract
 * @public
 * @author Wang Yucai
 */
export declare abstract class HashAlgorithm implements IHashAlgorithm {
    private _algorithmName;
    /**
     * 用于初始化一个 HashAlgorithm 类型的对象实例。
     * @param {String} algName 算法名称。
     */
    constructor(algName?: string);
    computeHash(s: string): string;
    algorithmName: string;
    /**
     * 创建哈希算法程序。
     * @abstract
     * @protected
     * @method
     */
    protected abstract createProvider(): Function;
}
