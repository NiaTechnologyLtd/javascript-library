/**
 * @description 提供了 WEB 相关的辅助方法。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.3.2.1308
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class WebUtilities {
  /**
   * @description 重定向到指定的 URL 地址。
   * @param {String} url 新的 URL 地址。
   * @static
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.3.2.1352
   */
  static redirectTo(url) {
    window.location.href = url ?? window.location.href;
  }
}
