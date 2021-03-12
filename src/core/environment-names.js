/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
/**
 * 定义了内置环境名称枚举类型。
 * @enum
 * @public
 * @author Wang Yucai
 */
export var EnvironmentNames;
(function (EnvironmentNames) {
    /**
     * 代表生产环境。
     * @type {String}
     */
    EnvironmentNames["production"] = "production";
    /**
     * 代表测试环境。
     * @type {String}
     */
    EnvironmentNames["testing"] = "test";
    /**
     * 代表开发环境。
     * @type {String}
     */
    EnvironmentNames["development"] = "development";
})(EnvironmentNames || (EnvironmentNames = {}));
