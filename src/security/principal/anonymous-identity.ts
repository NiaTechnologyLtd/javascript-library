/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import { IdentityBase, DefaultUserName } from "./identity-base";

/**
 * 提供了匿名用户身份相关的信息。
 * @class
 * @public
 * @author Wang Yucai
 */
export class AnonymousIdentity extends IdentityBase {
  /**
   * 用于初始化一个 AnonymousIdentity 类型的对象实例。
   */
  constructor() {
    super(DefaultUserName, false);
  }
}
