/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
/**
 * 定义了本地存储方式枚举类型。
 * @enum
 * @public
 * @author Wang Yucai
 */
export var LocaleStoreModes;
(function (LocaleStoreModes) {
    /**
     * 本地存储。
     */
    LocaleStoreModes[LocaleStoreModes["LocaleStorage"] = 1] = "LocaleStorage";
    /**
     * 本地会话存储。
     */
    LocaleStoreModes[LocaleStoreModes["SessionStorage"] = 2] = "SessionStorage";
    /**
     * 基于 Cookie 的本地存储。
     */
    LocaleStoreModes[LocaleStoreModes["CookieStorage"] = 3] = "CookieStorage";
})(LocaleStoreModes || (LocaleStoreModes = {}));
