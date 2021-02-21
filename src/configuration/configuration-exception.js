import { Exception } from "../exception";
import { Utilities } from "../utilities";

/**
 * @description 当配置系统异常时，将引发此类型的异常。
 * @class
 * @public
 * @see {Exception}
 * @extends {Exception}
 * @author Wang Yucai
 * @version 2021.2.22.056
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class ConfigurationException extends Exception {
  /**
   * @description 用于初始化一个 ConfigurationException 类型的对象实例。
   * @param {String} key 配置标识名称。
   * @param {Exception} innerException 引发此异常的内部异常。
   */
  constructor(key = undefined, innerException = undefined) {
    super(
      Utilities.formatStr("读取配置 “{0}” 时，引发了未处理的异常。", key),
      innerException
    );
  }
}
