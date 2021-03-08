/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import * as CryptoJS from "crypto-js";
import { IHashAlgorithm } from "./hashalgorithm-interface";
import { HashAlgorithmNames } from "./hashalgorithm-names";

/**
 * 提供了哈希算法相关的基本方法。
 * @class
 * @abstract
 * @public
 * @author Wang Yucai
 */
export abstract class HashAlgorithm implements IHashAlgorithm {
  private _algorithmName: string = HashAlgorithmNames.MD5;

  /**
   * 用于初始化一个 HashAlgorithm 类型的对象实例。
   * @param {String} algName 算法名称。
   */
  constructor(algName: string = HashAlgorithmNames.MD5) {
    this._algorithmName = algName;
  }

  computeHash(s: string): string {
    return this.createProvider()(s);
  }
  algorithmName: string = this._algorithmName;

  /**
   * 创建哈希算法程序。
   * @abstract
   * @protected
   * @method
   */
  protected abstract createProvider(): Function;
}
