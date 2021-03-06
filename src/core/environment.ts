/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import { Configuration } from "./configuration/configuration";
import { EnvironmentNames } from "./environment-names";
import { Guard } from "./guard";

/**
 * 提供了运行环境相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class Environment {
  private _configSectionName = "NODE_ENV";

  /**
   * 类库默认的环境名称。
   * @constant
   * @public
   * @see {EnvironmentNames}
   */
  public static readonly DefaultEnvironmentName: EnvironmentNames =
    EnvironmentNames.production;

  /**
   * 获取一个字符串，用于表示当前的环境。
   * @type {String}
   * @property
   * @public
   */
  public get currentEnvironment(): string {
    return Guard.safeGet(
      Configuration.createInstance().get(this._configSectionName),
      Environment.DefaultEnvironmentName.toString()
    ).toLowerCase();
  }

  /**
   * 获取一个值，用于表示当前是否为生产环境。
   * @type {boolean}
   * @property
   * @public
   */
  public get isProduction(): boolean {
    return this.currentEnvironment === EnvironmentNames.production.toString();
  }

  /**
   * 获取一个值，用于表示当前是否为测试环境。
   * @type {boolean}
   * @property
   * @public
   */
  public get isTesting(): boolean {
    return this.currentEnvironment === EnvironmentNames.testing.toString();
  }

  /**
   * 获取一个值，用于表示当前是否为开发环境。
   * @type {boolean}
   * @property
   * @public
   */
  public get isDevelopment(): boolean {
    return this.currentEnvironment === EnvironmentNames.development.toString();
  }
}

