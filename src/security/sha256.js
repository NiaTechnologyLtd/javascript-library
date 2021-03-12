/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import * as CryptoJS from "crypto-js";
import { HashAlgorithm } from "./hashalgorithm-base";
import { HashAlgorithmNames } from "./hashalgorithm-names";
/**
 * 提供了 SHA256 哈希算法相关的方法。
 * @public
 * @class
 * @author Wang Yucai
 */
export class SHA256CryptoServiceProvider extends HashAlgorithm {
    createProvider() {
        return CryptoJS.SHA256;
    }
    /**
     * 用于初始化一个 SHA256CryptoServiceProvider 类型的对象实例。
     * @constructor
     */
    constructor() {
        super(HashAlgorithmNames.SHA256);
    }
}
export const SHA256 = new SHA256CryptoServiceProvider();
