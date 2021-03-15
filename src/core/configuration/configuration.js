/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { ExceptionHelper } from "../exception-helper";
/**
 * 提供了访问配置信息相关的方法。
 * @class
 * @public
 * @see {IConfiguration}
 * @author Wang Yucai
 */
export class Configuration {
    get(name) {
        if (this.exist(name)) {
            return process.env[name];
        }
        return undefined;
    }
    exist(name) {
        ExceptionHelper.argumentNotSupport(name, "name");
        if (process.env[name])
            return true;
        return false;
    }
    /**
     * 创建或者获取配置实例。
     * @static
     * @method
     * @returns {IConfiguration}
     * @public
     */
    static createInstance() {
        if (!Configuration._instance) {
            Configuration._instance = new Configuration();
        }
        return Configuration._instance;
    }
}
Configuration._instance = undefined;
