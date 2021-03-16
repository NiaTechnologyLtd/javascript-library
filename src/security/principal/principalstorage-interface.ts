/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import { Claim } from "../claim";

/**
 * 定义了存储身份信息的接口。
 * @interface
 * @public
 * @author Wang Yucai
 */
export interface IPrincipalStorage {
  /**
   * 保存身份信息点。
   * @param {Array<Claim>} claims 身份信息点集合。
   * @method
   * @public
   */
  save(claims?: Array<Claim>): void;

  /**
   * 重新装载身份信息。
   * @returns {Array<Claim>}
   * @method
   * @public
   */
  load(): Array<Claim> | undefined;
}
