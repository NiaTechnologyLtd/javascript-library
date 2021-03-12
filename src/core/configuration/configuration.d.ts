/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { IConfiguration } from "./configuration-interface";
/**
 * 提供了访问配置信息相关的方法。
 * @class
 * @public
 * @see {IConfiguration}
 * @author Wang Yucai
 */
export declare class Configuration implements IConfiguration {
    private static _instance;
    get(name: string): string | undefined;
    exist(name: string): boolean;
    /**
     * 创建或者获取配置实例。
     * @static
     * @method
     * @returns {IConfiguration}
     * @public
     */
    static createInstance(): IConfiguration;
}
