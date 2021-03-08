/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

/**
 * 定义了哈希运算算法的接口。
 * @interface
 * @public
 * @author Wang Yucai
 */
export interface IHashAlgorithm {
  /**
   * 计算字符串的哈希值。
   * @param {String} s 需要计算哈希数据的字符串。
   * @returns {String}
   * @method
   * @public
   */
  computeHash(s: string): string;

  /**
   * 获取一个字符串，用于表示哈希算法名称。
   * @property
   * @readonly
   * @public
   * @type {String}
   */
  readonly algorithmName: string;
}
