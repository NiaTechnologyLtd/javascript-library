/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

/**
 * 定义了本地存储方式枚举类型。
 * @enum
 * @public
 * @author Wang Yucai
 */
export enum LocaleStoreModes {
  /**
   * 本地存储。
   */
  LocaleStorage = 1,
  /**
   * 本地会话存储。
   */
  SessionStorage = 2,
  /**
   * 基于 Cookie 的本地存储。
   */
  CookieStorage = 3,
}
