/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import { Guard } from "../../core/guard";
import { AnonymousIdentity } from "./anonymous-identity";
import { IIdentity } from "./identity-interface";
import { IPrincipal } from "./principal-interface";

/**
 * 提供了身份相关的概要信息。
 * @abstract
 * @class
 * @public
 * @author Wang Yucai
 */
export abstract class PrincipalBase implements IPrincipal {
  /**
   * 用于初始化一个 PrincipalBase 类型的对象实例。
   * @param {IIdentity} identity 当前的用户身份。
   */
  constructor(identity?: IIdentity) {
    this.identity = Guard.safeGet(identity, new AnonymousIdentity());
  }
  readonly identity: IIdentity;
}
