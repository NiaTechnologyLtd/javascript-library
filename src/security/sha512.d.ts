/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { HashAlgorithm } from "./hashalgorithm-base";
/**
 * 提供了 SHA512 哈希算法相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export declare class SHA512CryptoServiceProvider extends HashAlgorithm {
    protected createProvider(): Function;
    /**
     * 用于初始化一个 SHA512CryptoServiceProvider 类型的对象实例。
     * @constructor
     */
    constructor();
}
export declare const SHA512: SHA512CryptoServiceProvider;
