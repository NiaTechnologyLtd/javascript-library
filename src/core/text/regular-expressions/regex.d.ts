/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { RegexBase } from "./regex-base";
import { IRegex } from "./regex-interface";
/**
 * 提供了正则表达式相关的方法。
 *
 * @class
 * @public
 * @see RegexBase
 * @author Wang Yucai
 */
export declare class Regex extends RegexBase implements IRegex {
    private static _instance;
    /**
     * 创建或者获取 Regex 单例实例。
     *
     * @returns {IRegex}
     * @public
     * @method
     * @static
     */
    static createInstance(): IRegex;
}
