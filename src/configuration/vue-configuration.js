import { Utilities } from "../utilities";
import { Configuration } from "./configuration";
import { __niaInternalVariables as nia } from "../internal";

/**
 * @description 提供了适用于 Vue.js 的配置信息访问相关的方法。
 * @class
 * @extends {Configuration}
 * @public
 * @see {Configuration}
 * @author Wang Yucai
 * @version 2021.2.24.026
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class VueConfiguration extends Configuration {
  /**
   * @description 用于初始化一个 VueConfiguration 类型的对象实例。
   */
  constructor() {
    super();
  }

  /**
   * @description 用于校验配置标识名称是否包含 Vue.js 应用配置固定前缀。
   * @param {String} key 配置标识名称。
   * @returns {Boolean}
   * @method
   * @private
   * @author Wang Yucai
   * @version 2021.2.24.034
   */
  _hasPrefix(key) {
    nia.vue_configuration.has_prefix.lastIndex = -1;
    return nia.vue_configuration.has_prefix.test(key);
  }

  /**
   * @description 获取指定标识名称的 Vue.js 配置。
   * @param {String} key 配置标识名称。
   * @returns {String}
   * @method
   * @override
   * @public
   * @author Wang Yucai
   * @version 2021.2.24.044
   */
  get(key) {
    this._invalidConfigKey(key);

    if (!this._hasPrefix(key)) {
      key = Utilities.formatStr("VUE_APP_{0}", key);
    }

    console.debug("调试：尝试获取标识名称为 “%s” 的 Vue.js 配置值。", key);

    if (!this.exists(key)) throw new ConfigurationException(key);

    return process.env[key.toUpperCase().trim()];
  }

  /**
   * @description 用于校验指定标识名称的 Vue.js 配置是否存在。
   * @param {String} key 配置标识名称。
   * @returns {Boolean}
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.2.24.044
   */
  exists(key) {
    key = _utils.safeGet(key, "");

    if (!this._hasPrefix(key)) key = _utils.formatStr("VUE_APP_", key);
    return (
      !_utils.isNullOrWhitespaces(key) && process.env[key.toUpperCase().trim()]
    );
  }

  /**
   * @description 创建或获取一个配置服务对象实例。
   * @returns {VueConfiguration}
   * @method
   * @static
   * @public
   * @author Wang Yucai
   * @version 2021.2.24.045
   */
  static createOrGet() {
    if (!nia.singleton.vue_configuration.current_configuration) {
      console.debug("调试：尝试初始化 Vue.js 配置服务。");
      nia.singleton.vue_configuration.current_configuration = new VueConfiguration();
    }

    return nia.singleton.vue_configuration.current_configuration;
  }
}
