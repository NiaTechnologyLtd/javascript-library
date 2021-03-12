/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { Environment } from "./environment";
import { LocaleStoreModes } from "./localestore-modes";
import { IConfiguration } from "./configuration/configuration-interface";
import { IRegex } from "./text/regular-expressions/regex-interface";
/**
 * 提供了应用程序上下文相关的信息。
 * @constant
 * @public
 * @author Wang Yucai
 */
export declare const AppContext: {
    current: {
        env: Environment;
    };
    client: {
        defaultStorageMode: LocaleStoreModes;
    };
    defaultProviders: {
        MD5: import("../security/md5").MD5CryptoServiceProvider;
        SHA1: import("../security/sha1").SHA1CryptoServiceProvider;
        SHA256: import("../security/sha256").SHA256CryptoServiceProvider;
        SHA512: import("../security/sha512").SHA512CryptoServiceProvider;
        Configuration: IConfiguration;
        Regex: IRegex;
    };
};
