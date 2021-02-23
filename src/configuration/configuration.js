import { Utilities as _utils } from "../utilities";
import { ArgumentNullException } from "../argument-null-exception";
import { ConfigurationException } from "./configuration-exception";

let _currentConfig = undefined;

/**
 * @description 提供了访问配置信息相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.2.22.004
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class Configuration {
  /**
   * @description 获取指定标识名称的配置。
   * @param {String} key 配置标识名称。
   * @returns {String}
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.2.22.007
   */
  get(key) {
    this._invalidConfigKey(key);

    console.debug("调试：尝试获取标识名称为 “%s” 的配置值。", key);

    if (!this.exists(key)) throw new ConfigurationException(key);

    return process.env[key.toUpperCase().trim()];
  }

  /**
   * @description 用于校验指定标识名称的配置是否存在。
   * @param {String} key 配置标识名称。
   * @returns {Boolean}
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.2.22.052
   */
  exists(key) {
    key = _utils.safeGet(key, "");

    return (
      !_utils.isNullOrWhitespaces(key) && process.env[key.toUpperCase().trim()]
    );
  }

  /**
   * @description 验证配置标识名称。如果 key 等于 null 或者 undefined，则抛出异常。
   * @param {String} key 需要校验的配置标识名称。
   * @method
   * @private
   * @protected
   * @see {ArgumentNullException}
   * @author Wang Yucai
   * @version 2021.2.22.011
   */
  _invalidConfigKey(key) {
    key = _utils.safeGet(key, "");
    if (_utils.isNullOrWhitespaces(key)) throw new ArgumentNullException("key");
  }

  /**
   * @description 创建或获取一个配置服务对象实例。
   * @returns {Configuration}
   * @method
   * @static
   * @public
   * @author Wang Yucai
   * @version 2021.2.23.2340
   */
  static createOrGet() {
    if (!_currentConfig) {
      console.debug("调试：尝试初始化配置服务。");
      _currentConfig = new Configuration();
    }

    return _currentConfig;
  }
}
