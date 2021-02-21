import { Configuration } from "./configuration/configuration";
import { Utilities } from "./utilities";

let _currentEnvName = undefined;

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
        new Configuration().get("NODE_ENV"),
        "production"
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
    return EnvironmentContext.environmentName === "development";
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
    return EnvironmentContext.environmentName === "test";
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
    return EnvironmentContext.environmentName === "production";
  }
}
