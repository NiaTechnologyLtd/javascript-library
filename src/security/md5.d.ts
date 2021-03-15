/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { HashAlgorithm } from "./hashalgorithm-base";
/**
 * 提供了 MD5 哈希算法相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export declare class MD5CryptoServiceProvider extends HashAlgorithm {
    constructor();
    protected createProvider(): Function;
}
export declare const MD5: MD5CryptoServiceProvider;
