/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
/**
 * 提供了构建字符串相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export declare class StringBuilder {
    private _buffer;
    /**
     * 用于初始化一个 StringBuilder 类型的对象实例。
     * @param {String} s 用于初始化的字符串。
     * @constructor
     */
    constructor(s?: string);
    /**
     * 在 StringBuilder 结尾处追加字符串。
     * @param {String} s 需要追加的字符串。
     * @returns {StringBuilder}
     * @method
     * @public
     */
    append(s: string): StringBuilder;
    /**
     * 在 StringBuilder 结尾处追加字符串，并以换行符结束。
     * @param {String} s 需要追加的字符串。
     * @returns {StringBuilder}
     * @method
     * @public
     */
    appendLine(s: string): StringBuilder;
}
