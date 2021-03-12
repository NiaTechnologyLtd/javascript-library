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
import { LocaleStoreModes } from "./localestore-modes";
import { IConfiguration } from "./configuration/configuration-interface";
import { Configuration } from "./configuration/configuration";
import { IRegex } from "./text/regular-expressions/regex-interface";
import { Regex } from "./text/regular-expressions/regex";

const _applicationEnv: Environment = new Environment();
const _configuration: IConfiguration = Configuration.createInstance();
const _regex: IRegex = Regex.createInstance();

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
  client: {
    defaultStorageMode: LocaleStoreModes.SessionStorage,
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
