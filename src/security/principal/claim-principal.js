/**
 * @description 提供了用户身份摘要信息。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.3.1.1109
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class ClaimPrincipal {
  /**
   * @description 用于初始化一个 ClaimPrincipal 类型的对象实例。
   * @param {ClaimIdentity} identity 用户身份信息。
   * @constructor
   */
  constructor(identity = undefined) {
    this._user = identity;
    this._isAuthen = identity?.isAuthenticated;
  }

  /**
   * @description 获取 ClaimIdentity 类型的对象实例，用于表示当前的用户。
   * @property
   * @type {ClaimIdentity}
   * @public
   * @readonly
   * @author Wang Yucai
   * @version 2021.3.1.1113
   */
  get user() {
    return this._user;
  }

  /**
   * @description 获取一个值，用于表示是否已经身份认证。
   * @property
   * @type {Boolean}
   * @public
   * @readonly
   * @author Wang Yucai
   * @version 2021.3.1.1115
   */
  get isAuthenticated() {
    return this._isAuthen;
  }
}
