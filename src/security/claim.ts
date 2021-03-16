/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import { ExceptionHelper } from "../core/exception-helper";
import { Guard } from "../core/guard";
import { IKeyValuePair } from "../core/kvp-interface";
import { ClaimType } from "./claim-type";

/**
 * 提供了身份信息点相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class Claim {
  /**
   * 用于初始化一个 Claim 类型的对象实例。
   * @param {String | ClaimType} name 身份信息点标识名称。
   * @param {String} value 身份信息点值。
   */
  constructor(name: string | ClaimType, value?: string) {
    ExceptionHelper.argumentNotSupport(name, "name");

    this.name = name;
    this.value = Guard.safeGet(value, "");
  }

  /**
   * 获取一个字符串，用于表示身份信息点标识名称。
   * @property
   * @readonly
   * @type {String}
   * @public
   */
  public readonly name: string;

  /**
   * 获取一个字符串，用于表示身份信息点值。
   * @property
   * @readonly
   * @public
   * @type {String}
   */
  public readonly value: string;
}
