/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import { ExceptionHelper } from "../exception-helper";
import { Guard } from "../guard";

/**
 * 提供了 WEB 相关的辅助方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class WebUtilities {
  /**
   * 重定向到指定的 URL 地址。
   * @param {String} url URL 地址。
   * @method
   * @static
   * @public
   */
  public static redirectTo(url?: string) {
    let _url: string = Guard.safeGet(url, window.location.href).toString();

    console.info("信息：浏览器即将重定向到 “%s”。", _url);

    window.location.href = _url;
  }

  /**
   * 刷新当前页面。
   * @method
   * @static
   * @public
   */
  public static refresh() {
    WebUtilities.redirectTo();
  }

  /**
   * 使用 encodeURI 方法对 URL 进行编码。
   * @param {String} url 需要编码的 URL。
   * @returns {String}
   * @public
   * @method
   * @see {encodeURI}
   */
  public static urlEncode(url: string): string {
    ExceptionHelper.argumentNotSupport(url, "url");
    return encodeURI(url);
  }

  /**
   * 使用 decodeURI 方法对 URL 进行解码。
   * @param {String} url 需要解码的 URL。
   * @returns {String}
   * @public
   * @method
   * @see {decodeURI}
   */
  public static urlDecode(url: string): string {
    ExceptionHelper.argumentNotSupport(url, "url");

    return decodeURI(url);
  }

  /**
   * 使用 encodeURIComponent 方法对 URL 进行编码。
   * @param {String} url 需要编码的 URL 地址。
   * @returns {String}
   * @method
   * @public
   * @static
   * @see {encodeURIComponent}
   */
  public static urlEncode2(url: string): string {
    ExceptionHelper.argumentNotSupport(url, "url");

    return encodeURIComponent(url);
  }

  /**
   * 使用 decodeURIComponent 方法对 URL 进行解码。
   * @param {String} url 需要解码的 URL 地址。
   * @returns {String}
   * @method
   * @static
   * @public
   * @see {decodeURIComponent}
   */
  public static urlDecode2(url: string): string {
    ExceptionHelper.argumentNotSupport(url, "url");

    return decodeURIComponent(url);
  }
}
