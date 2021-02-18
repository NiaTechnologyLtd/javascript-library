import $string_template from "string-template";

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
}
