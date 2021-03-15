/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import { Guard } from "../../core/guard";
import { ClaimTypes } from "./claim-types";

/**
 * 提供了身份信息点相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class Claim {
  /**
   * 设置或获取一个字符串，用于表示信息点标识名称。
   * @property
   * @type {String}
   * @public
   */
  public name: string;

  /**
   * 设置或获取一个字符串，用于表示身份信息点值。
   * @property
   * @type {String}
   * @public
   */
  public value: string;

  /**
   * 用于初始化一个 Claim 类型的对象实例。
   * @param {String | ClaimTypes} name 身份信息点名称。
   * @param {String} value 身份信息点值。
   * @constructor
   * @public
   */
  constructor(name: string | ClaimTypes, value?: string) {
    this.name = name;
    this.value = Guard.safeGet(value, "");
  }

  /**
   * 用于校验此信息点是否确实必要信息。
   * @public
   * @method
   * @returns {Boolean}
   */
  public isValid(): boolean {
    return !Guard.isNullOrEmpty(this.name) && !Guard.isNullOrEmpty(this.value);
  }
}
