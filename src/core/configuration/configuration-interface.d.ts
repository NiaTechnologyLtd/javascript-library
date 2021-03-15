/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
/**
 * 定义了访问配置信息的接口。
 * @interface
 * @public
 * @author Wang Yucai
 */
export interface IConfiguration {
    /**
     * 用于校验指定名称的配置是否存在。
     * @param {String} name 需要校验的配置名称。
     * @returns {Boolean}
     */
    exist(name: string): boolean;
    /**
     * 获取指定名称的配置。
     * @param {String} name 指定的配置名称。
     * @returns {String}
     */
    get(name: string): string | undefined;
}
