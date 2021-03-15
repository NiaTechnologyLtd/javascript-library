/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { HashAlgorithmNames } from "./hashalgorithm-names";
/**
 * 提供了哈希算法相关的基本方法。
 * @class
 * @abstract
 * @public
 * @author Wang Yucai
 */
export class HashAlgorithm {
    /**
     * 用于初始化一个 HashAlgorithm 类型的对象实例。
     * @param {String} algName 算法名称。
     */
    constructor(algName = HashAlgorithmNames.MD5) {
        this._algorithmName = HashAlgorithmNames.MD5;
        this.algorithmName = this._algorithmName;
        this._algorithmName = algName;
    }
    computeHash(s) {
        return this.createProvider()(s);
    }
}
