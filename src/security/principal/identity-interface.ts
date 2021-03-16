/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

/**
 * 定义了用户身份信息的接口。
 * @interface
 * @public
 * @author
 */
 export interface IIdentity {
    /**
     * 获取一个字符串，用于表示用户名称。
     * @property
     * @type {String}
     * @readonly
     */
    readonly name: string;
  
    /**
     * 获取一个值，用于表示是否经过身份认证。
     * @property
     * @type {Boolean}
     * @readonly
     */
    readonly isAuthenticated: boolean;
  }
  