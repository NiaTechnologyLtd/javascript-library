import { Utilities as _utils } from "./utilities";

/**
 * @description 默认的异常信息。
 * @constant
 * @type {String}
 * @public
 * @author Wang Yucai
 * @version 2021.2.21.027
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export const DefaultExceptionMessage = "客户端系统引发了未处理的异常。";

/**
 * @description 提供了运行时异常相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.2.21.026
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class Exception {
  /**
   * @description 用于初始化一个 Exception 类型的对象实例。
   * @param {String} message 异常描述信息。
   * @param {Exception} innerException 引发此异常的内部异常。
   * @constructor
   * @public
   */
  constructor(message = undefined, innerException = undefined) {
    this._message = _utils.safeGet(message, DefaultExceptionMessage);
    this._innerException = innerException;
  }

  /**
   * @description 获取一个字符串，用于表示异常描述信息。
   * @type {String}
   * @property
   * @readonly
   * @public
   * @author Wang Yucai
   * @version 2021.2.21.038
   */
  get message() {
    return this._message;
  }

  /**
   * @description 获取 Exception 类型的对象实例，用于表示引发此异常的内部异常。
   * @type {Exception}
   * @property
   * @readonly
   * @public
   * @author Wang Yucai
   * @version 2021.2.21.040
   */
  get innerException() {
    return this._innerException;
  }
}