/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

/**
 * 定义了身份信息点默认类型枚举。
 * @enum
 * @public
 * @author Wang Yucai
 */
export enum ClaimTypes {
  /**
   * 代表令牌签发人。
   */
  Issuer = "issuer",
  /**
   * 代表令牌审核人。
   */
  Auditor = "auditor",
  /**
   * 代表令牌超时时间。
   */
  Expires = "expires",
  /**
   * 代表令牌值。
   */
  TokenValue = "access_token",
  /**
   * 代表令牌类型。
   */
  TokenType = "token_type",
  /**
   * 代表客户端唯一标识。
   */
  ClientId = "client_id",
  /**
   * 代表令牌加密算法名称。
   */
  AlgorithmName = "alg_name",
  /**
   * 代表用户唯一标识。
   */
  UserId = "user_id",
  /**
   * 代表用户名。
   */
  UserName = "user_name",
  /**
   * 代表用户开放标识。
   */
  UserOpenId = "user_openid",
  /**
   * 代表用户真实姓名。
   */
  Name = "real_name",
  /**
   * 代表用户的电邮地址。
   */
  EmailAddress = "email_addr",
  /**
   * 代表用户的电话号码。
   */
  PhoneNumber = "tel_num",
  /**
   * 代表令牌本地存储方法。
   */
  StoreMode = "__store_mode__",
}
