/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { HashAlgorithm } from "./hashalgorithm-base";
import { HashAlgorithmNames } from "./hashalgorithm-names";
/**
 * 提供了 MD5 哈希算法相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class MD5CryptoServiceProvider extends HashAlgorithm {
    constructor() {
        super(HashAlgorithmNames.MD5);
    }
    createProvider() {
        return CryptoJS.MD5;
    }
}
export const MD5 = new MD5CryptoServiceProvider();
