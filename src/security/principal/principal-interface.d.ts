/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
import { IIdentity } from "./identity-interface";
/**
 * 定义了用户身份摘要信息的接口。
 * @interface
 * @public
 * @author Wang Yucai
 */
export interface IPrincipal {
    /**
     * 获取 IIdentity 类型的对象实例，用于表示当前的用户身份。
     * @property
     * @readonly
     * @type {IIdentity}
     * @public
     */
    readonly Identity: IIdentity;
}
