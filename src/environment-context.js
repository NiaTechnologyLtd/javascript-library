import { Configuration } from "./configuration/configuration";
import { Utilities } from "./utilities";

let _currentEnvName = undefined;

/**
 * @description 提供了内置的环境名称相关的方法。
 * @enum
 * @public
 * @author Wang Yucai
 * @version 2021.2.23.2352
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export const EnvironmentNameSet = {
  RTM: "production",
  DEV: "development",
  TEST: "test",
};

/**
 * @description 默认的环境名称。
 * @constant
 * @type {String}
 * @author Wang Yucai
 * @version 2021.2.23.2355
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export const DefaultEnvironmentName = EnvironmentNameSet.RTM;

/**
 * @description 提供了访问上下文环境信息相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.2.22.138
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class EnvironmentContext {
  /**
   * @description 获取一个字符串，用于表示当前的环境名称。
   * @type {String}
   * @property
   * @static
   * @readonly
   * @public
   * @author Wang Yucai
   * @version 2021.2.22.141
   */
  static get environmentName() {
    if (!_currentEnvName) {
      _currentEnvName = Utilities.safeGet(
        Configuration.createOrGet().get("NODE_ENV"),
        DefaultEnvironmentName
      );
    }
    return _currentEnvName.toLowerCase();
  }

  /**
   * @description 获取一个值，用于表示当前是否为开发环境。
   * @type {Boolean}
   * @property
   * @static
   * @readonly
   * @public
   * @author Wang Yucai
   * @version 2021.2.22.145
   */
  static get isDevelopment() {
    return EnvironmentContext.equals(EnvironmentNameSet.DEV);
  }

  /**
   * @description 获取一个值，用于表示当前是否为测试环境。
   * @type {Boolean}
   * @property
   * @static
   * @readonly
   * @public
   * @author Wang Yucai
   * @version 2021.2.22.147
   */
  static get isTesting() {
    return EnvironmentContext.equals(EnvironmentNameSet.TEST);
  }

  /**
   * @description 获取一个值，用于表示当前是否为生产环境。
   * @type {Boolean}
   * @property
   * @static
   * @readonly
   * @public
   * @author Wang Yucai
   * @version 2021.2.22.147
   */
  static get isProduction() {
    return EnvironmentContext.equals();
  }

  /**
   * @description 用于校验当前的环境是否与指定的环境名称相等。
   * @param {String} envName 指定的环境名称。
   * @returns {Boolean}
   * @method
   * @static
   * @public
   * @author Wang Yucai
   * @version 2021.2.23.2357
   */
  static equals(envName = DefaultEnvironmentName) {
    return (
      EnvironmentContext.environmentName.toLowerCase() === envName.toLowerCase()
    );
  }
}
