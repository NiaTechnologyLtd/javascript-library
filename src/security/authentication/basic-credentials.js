import { Utilities } from "../../utilities";
import { ArgumentNullException } from "../../argument-null-exception";
import { CryptographyUtils } from "../cryptography-utils";
import { HashAlgorithmName } from "../hash-algorithm-name";

/**
 * @description 提供了基于用户名、密码的身份认证凭据信息。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.3.1.1220
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class BasicCredentials {
  /**
   * @description 用于初始化一个 BasicCredentials 类型的对象实例。
   * @param {String} userName 用户名。
   * @param {String} password 登录密码。
   */
  constructor(userName, password) {
    if (Utilities.isNullOrWhitespaces(userName))
      throw new ArgumentNullException("userName");
    if (Utilities.isNullOrWhitespaces(password))
      throw new ArgumentNullException("password");

    this._userName = userName.toLowerCase().trim();
    this._pwd = CryptographyUtils.computeHash(
      password.trim(),
      HashAlgorithmName.sha1
    );
    this._pwd2 = CryptographyUtils.computeHash(
      password.toLowerCase().trim(),
      HashAlgorithmName.sha1
    );
  }

  /**
   * @description 获取一个字符串，用于表示用户名。
   * @property
   * @type {String}
   * @public
   * @readonly
   * @author Wang Yucai
   * @version 2021.3.1.1232
   */
  get userName() {
    return this._userName;
  }

  /**
   * @description 获取一个字符串，用于表示登录口令。
   * @property
   * @type {String}
   * @readonly
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.1234
   */
  get password() {
    return this._pwd;
  }

  /**
   * @description 获取一个字符串，用于表示忽略了大小写的登录口令。
   * @property
   * @type {String}
   * @readonly
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.1235
   */
  get ignoreCasingPassword() {
    return this._pwd2;
  }

  /**
   * @description 将此对象实例转换成 JSON。
   * @returns {Object}
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.1305
   */
  toJson() {
    return {
      userName: this.userName,
      password: this.password,
      ignoreCasingPassword: this.ignoreCasingPassword,
    };
  }
}
