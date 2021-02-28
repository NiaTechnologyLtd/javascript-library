import $cryptojs from "crypto-js";
import { __niaInternalVariables } from "../internal";
import { Utilities as _utils } from "../utilities";

const DEFAULT_KEY_OF_AES = __niaInternalVariables.security.aes_key;

/**
 * @description 提供了数据加密相关的辅助方法。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.3.1.009
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class CryptographyUtils {
  /**
   * @description 使用 AES 算法加密字符串 “s”。
   * @param {String} s 需要加密的字符串。
   * @param {String} key 用于加密的密钥。
   * @returns {String}
   * @static
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.014
   */
  static encryptWithAES(s, key = DEFAULT_KEY_OF_AES) {
    if (_utils.isNullOrEmpty(s)) {
      console.warn("警告：未提供有效的加密字符串变量 “s”。");
      return s;
    }
    return $cryptojs.AES.encrypt(s, key).toString();
  }

  /**
   * @description 使用 AES 算法加密字符串 “s”。
   * @param {String} s 需要解密的字符串。
   * @param {String} key 用于解密的密钥。
   * @returns {String}
   * @static
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.018
   */
  static decryptWithAES(s, key = DEFAULT_KEY_OF_AES) {
    if (_utils.isNullOrEmpty(s)) {
      console.warn("警告：未提供有效的解密字符串变量 “s”。");
      return s;
    }
    return $cryptojs.AES.decrypt(s, key).toString($cryptojs.enc.Utf8);
  }
}
