export var ClaimTypes;
(function (ClaimTypes) {
    ClaimTypes["Issuer"] = "issuer";
    ClaimTypes["Auditor"] = "auditor";
    ClaimTypes["Expires"] = "expires";
    ClaimTypes["TokenValue"] = "access_token";
    ClaimTypes["TokenType"] = "token_type";
    ClaimTypes["ClientId"] = "client_id";
    ClaimTypes["AlgorithmName"] = "alg_name";
    ClaimTypes["UserId"] = "user_id";
    ClaimTypes["UserName"] = "user_name";
    ClaimTypes["UserOpenId"] = "user_openid";
    ClaimTypes["Name"] = "real_name";
    ClaimTypes["EmailAddress"] = "email_addr";
    ClaimTypes["PhoneNumber"] = "tel_num";
    ClaimTypes["StoreMode"] = "__store_mode__";
})(ClaimTypes || (ClaimTypes = {}));
