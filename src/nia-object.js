/**
 * @description 提供了脚本库对象相关的基本方法。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.2.21.048
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class NiaObject {
  /**
   * @description 将此对象实例转换成 Json 字符串。
   * @returns {String}
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.2.21.049
   */
  toJson() {
    return JSON.stringify(this);
  }

  /**
   * @override
   * @description 将此对象实例转换成等效的字符串。
   * @returns {String}
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.2.21.051
   * @see {toJson}
   */
  toString() {
    return this.toJson();
  }
}
