/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { ILocaleStorage } from "./localestore-interface";
/**
 * 提供了基于 store2 的本地存储相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 * @see {store2}
 */
export declare class LocaleStorageProvider implements ILocaleStorage {
    /**
     * 校验本地存储标识名称的格式，并完善。
     * @param {String} name 需要校验的标识名称。
     * @returns {String}
     * @private
     * @method
     */
    private verifyAndFillName;
    exists(name: string): boolean;
    addOrUpdate(name: string, value?: any): void;
    remove(name: string): void;
    get(name: string): void;
}
