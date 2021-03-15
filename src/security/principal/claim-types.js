/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
/**
 * 定义了身份信息点默认类型枚举。
 * @enum
 * @public
 * @author Wang Yucai
 */
export var ClaimTypes;
(function (ClaimTypes) {
    /**
     * 代表令牌签发人。
     */
    ClaimTypes["Issuer"] = "issuer";
    /**
     * 代表令牌审核人。
     */
    ClaimTypes["Auditor"] = "auditor";
    /**
     * 代表令牌超时时间。
     */
    ClaimTypes["Expires"] = "expires";
    /**
     * 代表令牌值。
     */
    ClaimTypes["TokenValue"] = "access_token";
    /**
     * 代表令牌类型。
     */
    ClaimTypes["TokenType"] = "token_type";
    /**
     * 代表客户端唯一标识。
     */
    ClaimTypes["ClientId"] = "client_id";
    /**
     * 代表令牌加密算法名称。
     */
    ClaimTypes["AlgorithmName"] = "alg_name";
    /**
     * 代表用户唯一标识。
     */
    ClaimTypes["UserId"] = "user_id";
    /**
     * 代表用户名。
     */
    ClaimTypes["UserName"] = "user_name";
    /**
     * 代表用户开放标识。
     */
    ClaimTypes["UserOpenId"] = "user_openid";
    /**
     * 代表用户真实姓名。
     */
    ClaimTypes["Name"] = "real_name";
    /**
     * 代表用户的电邮地址。
     */
    ClaimTypes["EmailAddress"] = "email_addr";
    /**
     * 代表用户的电话号码。
     */
    ClaimTypes["PhoneNumber"] = "tel_num";
    /**
     * 代表令牌本地存储方法。
     */
    ClaimTypes["StoreMode"] = "__store_mode__";
})(ClaimTypes || (ClaimTypes = {}));
