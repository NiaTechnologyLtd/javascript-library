/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { HashAlgorithm } from "./hashalgorithm-base";
/**
 * 提供了 SHA256 哈希算法相关的方法。
 * @public
 * @class
 * @author Wang Yucai
 */
export declare class SHA256CryptoServiceProvider extends HashAlgorithm {
    protected createProvider(): Function;
    /**
     * 用于初始化一个 SHA256CryptoServiceProvider 类型的对象实例。
     * @constructor
     */
    constructor();
}
export declare const SHA256: SHA256CryptoServiceProvider;
