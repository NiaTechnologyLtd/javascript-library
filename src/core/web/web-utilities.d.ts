/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
/**
 * 提供了 WEB 相关的辅助方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export declare class WebUtilities {
    /**
     * 重定向到指定的 URL 地址。
     * @param {String} url URL 地址。
     * @method
     * @static
     * @public
     */
    static redirectTo(url?: string): void;
    /**
     * 刷新当前页面。
     * @method
     * @static
     * @public
     */
    static refresh(): void;
    /**
     * 使用 encodeURI 方法对 URL 进行编码。
     * @param {String} url 需要编码的 URL。
     * @returns {String}
     * @public
     * @method
     * @see {encodeURI}
     */
    static urlEncode(url: string): string;
    /**
     * 使用 decodeURI 方法对 URL 进行解码。
     * @param {String} url 需要解码的 URL。
     * @returns {String}
     * @public
     * @method
     * @see {decodeURI}
     */
    static urlDecode(url: string): string;
    /**
     * 使用 encodeURIComponent 方法对 URL 进行编码。
     * @param {String} url 需要编码的 URL 地址。
     * @returns {String}
     * @method
     * @public
     * @static
     * @see {encodeURIComponent}
     */
    static urlEncode2(url: string): string;
    /**
     * 使用 decodeURIComponent 方法对 URL 进行解码。
     * @param {String} url 需要解码的 URL 地址。
     * @returns {String}
     * @method
     * @static
     * @public
     * @see {decodeURIComponent}
     */
    static urlDecode2(url: string): string;
}
