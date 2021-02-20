import { Utilities as _utils } from "./utilities";
import { Exception } from "./exception";

/**
 * @description 当方法参数等于 null 或者 undefined 时，将引发此类型的异常。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.2.21.144
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * @see {Exception}
 */
export class ArgumentNullException extends Exception {
  /**
   * @description 用于初始化一个 ArgumentNullException 类型的对象实例。
   * @param {String} argName 参数名称。
   * @param {String} message 异常描述信息。
   * @param {Exception} innerException 引发此异常的内部异常。
   */
  constructor(
    argName = undefined,
    message = undefined,
    innerException = undefined
  ) {
    super(message, innerException);
    this._argName = argName;
    this._message = _utils.safeGet(
      message,
      argName
        ? _utils.formatStr("参数 “@{0}” 不可以为 null 或者 undefined。", [
            argName,
          ])
        : "参数不可以为 null 或者 undefined 。"
    );
  }

  /**
   * @description 获取一个字符串，用于表示错误的参数名称。
   * @type {String}
   * @property
   * @readonly
   * @public
   * @author Wang Yucai
   * @version 2021.2.21.155
   */
  get invalidArgumentName() {
    return this._argName;
  }
}
