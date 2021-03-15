/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { EnvironmentNames } from "./environment-names";
/**
 * 提供了运行环境相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export declare class Environment {
    private _configSectionName;
    /**
     * 类库默认的环境名称。
     * @constant
     * @public
     * @see {EnvironmentNames}
     */
    static readonly DefaultEnvironmentName: EnvironmentNames;
    /**
     * 获取一个字符串，用于表示当前的环境。
     * @type {String}
     * @property
     * @public
     */
    get currentEnvironment(): string;
    /**
     * 获取一个值，用于表示当前是否为生产环境。
     * @type {boolean}
     * @property
     * @public
     */
    get isProduction(): boolean;
    /**
     * 获取一个值，用于表示当前是否为测试环境。
     * @type {boolean}
     * @property
     * @public
     */
    get isTesting(): boolean;
    /**
     * 获取一个值，用于表示当前是否为开发环境。
     * @type {boolean}
     * @property
     * @public
     */
    get isDevelopment(): boolean;
}
