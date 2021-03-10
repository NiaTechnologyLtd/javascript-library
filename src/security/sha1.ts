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
 * 提供了 SHA1 哈希算法相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class SHA1CryptoServiceProvider extends HashAlgorithm {
  /**
   * 用于初始化一个 SHA1CryptoServiceProvider 类型的对象实例。
   * @constructor
   */
  constructor() {
    super(HashAlgorithmNames.SHA1);
  }

  protected createProvider(): Function {
    return CryptoJS.SHA1;
  }
}

export const SHA1 = new SHA1CryptoServiceProvider();
