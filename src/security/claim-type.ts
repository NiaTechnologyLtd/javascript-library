/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

/**
 * 定义了内置的身份信息点枚举类型。
 * @enum
 * @public
 * @author Wang Yucai
 */
export enum ClaimType {
  /**
   * 代表用户真实姓名。
   */
  name = "real_name",
  /**
   * 代表用户登录名。
   */
  userName = "user_name",
  /**
   * 代表访问令牌。
   */
  accessToken = "access_token",
  /**
   * 代表令牌失效时间。
   */
  expires = "access_token_expires",
  /**
   * 代表用户唯一标识。
   */
  userId = "user_id",
  /**
   * 代表用户开放标识。
   */
  userOpenId = "user_openid",
  /**
   * 代表电邮地址。
   */
  email = "email_address",
}
