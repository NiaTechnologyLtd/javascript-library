/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { SHA512 } from "../security/sha512";
import { MD5 } from "../security/md5";
import { SHA1 } from "../security/sha1";
import { SHA256 } from "../security/sha256";
import { Environment } from "./environment";
import { Configuration } from "./configuration/configuration";
import { Regex } from "./text/regular-expressions/regex";
const _applicationEnv = new Environment();
const _configuration = Configuration.createInstance();
const _regex = Regex.createInstance();
/**
 * 提供了应用程序上下文相关的信息。
 * @constant
 * @public
 * @author Wang Yucai
 */
export const AppContext = {
    current: {
        env: _applicationEnv,
    },
    defaultProviders: {
        MD5,
        SHA1,
        SHA256,
        SHA512,
        Configuration: _configuration,
        Regex: _regex,
    },
};
