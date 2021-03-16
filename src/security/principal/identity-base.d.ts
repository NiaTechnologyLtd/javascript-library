/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { IIdentity } from "./identity-interface";
/**
 * 默认的用户名。
 * @constant
 * @type {String}
 */
export declare const DefaultUserName: string;
/**
 * 提供了用户身份身份相关的基本信息。
 * @class
 * @abstract
 * @public
 * @author Wang Yucai
 */
export declare abstract class IdentityBase implements IIdentity {
    readonly name: string;
    readonly isAuthenticated: boolean;
    /**
     * 用于初始化一个 IdentityBase 类型的对象实例。
     * @param {String} name 用户名。
     * @param {Boolean} isAuthen 是否已经身份认证。
     */
    constructor(name: string, isAuthen?: boolean);
}
