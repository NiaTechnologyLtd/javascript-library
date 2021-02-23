import $string_template from "string-template";
import { __niaInternalVariables as nia } from "./internal";

/**
 * @description 提供了开发库相关的工具方法集。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.2.19.136
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class Utilities {
  /**
   * @description 格式化字符串。相当于 Microsoft .NET 的 String.Format 方法。
   * @param {String} s 格式化字符串模板。
   * @param  {Array} args 格式化参数数组。
   * @returns {String}
   * @method
   * @static
   * @public
   * @author Wang Yucai
   * @version 2021.2.19.142
   */
  static formatStr(s, ...args) {
    if (!s) {
      console.warn("警告：未提供有效的格式化字符串变量 “@s”。");
      return s ?? "";
    }
    return $string_template(s, args);
  }

  /**
   * @description 用于安全的获取值。
   * @param {any} value 需要验证的值。
   * @param {any} $default 当 value 等于 null 或者 undefined 时的默认值。
   * @returns {any}
   * @method
   * @static
   * @public
   * @author Wang Yucai
   * @version 2021.2.20.2349
   */
  static safeGet(value, $default) {
    return value ?? $default;
  }

  /**
   * @description 用于校验字符串是否等于 null、undefined 或者空字符串。
   * @param {String} str 用于校验的字符串。
   * @returns {Boolean}
   * @method
   * @static
   * @public
   * @author Wang Yucai
   * @version 2021.2.22.025
   */
  static isNullOrEmpty(str) {
    if (!str) return true;
    if (typeof str != "string") {
      str = str.toString();
    }

    nia.utilities.is_null_or_empty.lastIndex = -1;
    return nia.utilities.is_null_or_empty.test(str);
  }

  /**
   * @description 用于校验字符串是否等于 null、undefined 或者空白符。
   * @param {String} str 需要校验的字符串。
   * @returns {Boolean}
   * @method
   * @static
   * @public
   * @author Wang Yucai
   * @version 2021.2.22.042
   */
  static isNullOrWhitespaces(str) {
    nia.utilities.is_null_or_whitespaces.lastIndex = -1;
    return (
      Utilities.isNullOrEmpty(str) ||
      nia.utilities.is_null_or_whitespaces.test(
        typeof str != "string" ? str.toString() : str
      )
    );
  }
}
