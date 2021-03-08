/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

/**
 * 定义了键值对类型的接口。
 * @interface
 * @public
 * @author Wang Yucai
 */
export interface IKeyValuePair<TKey, TValue> {
  /**
   * 设置或获取一个值，用于表示 KVP 的键。
   * @property
   * @public
   */
  key: TKey;

  /**
   * 设置或获取一个值，用于表示 KVP 的值。
   * @property
   * @public
   */
  value: TValue;
}
