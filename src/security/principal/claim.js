import { ClaimType } from "./claim-type";
import { CryptographyUtils } from "../cryptography-utils";

/**
 * @description 提供了身份信息点相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.3.1.000
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class Claim {
  /**
   * @description 用于初始化一个 Claim 类型的对象实例。
   * @param {String} name 信息点描述名称。
   * @param {String} value 信息点值。
   */
  constructor(name = ClaimType.userName, value = "your user name.") {
    this._name = name;
    this._val = value;
  }

  /**
   * @description 设置或获取一个字符串，用于表示身份信息点描述名称。
   * @property
   * @type {String}
   * @param {String} v
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.026
   */
  set name(v) {
    this._name = v;
  }

  /**
   * @description 设置或获取一个字符串，用于表示身份信息点描述名称。
   * @property
   * @type {String}
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.029
   */
  get name() {
    return this._name;
  }

  /**
   * @description 设置或获取一个字符串，用于表示身份信息点值。
   * @property
   * @type {String}
   * @param {String} v
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.037
   */
  set value(v) {
    this._val = v;
  }

  /**
   * @description 设置或获取一个字符串，用于表示身份信息点值。
   * @property
   * @type {String}
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.037
   */
  get value() {
    return this._val;
  }

  /**
   * @description 获取已经 AES 加密的身份信息值。
   * @method
   * @public
   * @returns {String}
   * @author Wang Yucai
   * @version 2021.3.1.039
   */
  encryptValue() {
    return CryptographyUtils.encryptWithAES(this._val);
  }

  /**
   * @description 使用 AES 算法解密身份信息值。
   * @param {String} v 加密的身份信息值。
   * @returns {String}
   * @method
   * @static
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.044
   */
  static decryptValue(v) {
    return CryptographyUtils.decryptWithAES(v);
  }
}
