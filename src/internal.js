/**
 * @description 提供了 Nia JavaScript 开发库内部使用的常量、变量等。
 * @author Wang Yucai
 * @version 2021.2.24.055
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export const __niaInternalVariables = {
  utilities: {
    is_null_or_empty: /^$/,
    is_null_or_whitespaces: /^\s*$/,
  },
  singleton: {
    configuration: {
      current_configuration: undefined,
    },
    vue_configuration: {
      current_configuration: undefined,
    },
  },
  vue_configuration: {
    has_prefix: /^VUE\_APP\_/i,
  },
  security: {
    aes_key: "cByozPdOf7qNnAux2aJe3stGrbhUkTYl",
    authenticated_tag: "__authen__",
  },
};
