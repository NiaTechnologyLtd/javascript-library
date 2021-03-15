/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */
/**
 * 定义了哈希算法名称枚举类型。
 * @enum
 * @public
 * @author Wang Yucai
 */
export var HashAlgorithmNames;
(function (HashAlgorithmNames) {
    /**
     * 代表 MD5 哈希算法。
     */
    HashAlgorithmNames["MD5"] = "md5";
    /**
     * 代表 SHA1 哈希算法。
     */
    HashAlgorithmNames["SHA1"] = "sha1";
    /**
     * 代表 SHA256 哈希算法。
     */
    HashAlgorithmNames["SHA256"] = "sha256";
    /**
     * 代表 SHA512 哈希算法。
     */
    HashAlgorithmNames["SHA512"] = "sha512";
})(HashAlgorithmNames || (HashAlgorithmNames = {}));
