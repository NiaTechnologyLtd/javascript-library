/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import { Environment } from "./environment";

const _applicationEnv: Environment = new Environment();

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
};
