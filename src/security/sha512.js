/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import CrypoJs from "crypto-js";
import { HashAlgorithm } from "./hashalgorithm-base";
import { HashAlgorithmNames } from "./hashalgorithm-names";
/**
 * 提供了 SHA512 哈希算法相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class SHA512CryptoServiceProvider extends HashAlgorithm {
    createProvider() {
        return CrypoJs.SHA512;
    }
    /**
     * 用于初始化一个 SHA512CryptoServiceProvider 类型的对象实例。
     * @constructor
     */
    constructor() {
        super(HashAlgorithmNames.SHA512);
    }
}
export const SHA512 = new SHA512CryptoServiceProvider();
