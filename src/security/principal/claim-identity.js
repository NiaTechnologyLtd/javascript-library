import { ArgumentNullException } from "../../argument-null-exception";
import { Claim } from "./claim";
import { ClaimType } from "./claim-type";
import { __niaInternalVariables } from "../../internal";

/**
 * @description 提供了客户端身份信息相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 * @version 2021.3.1.055
 * @copyright Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 */
export class ClaimIdentity {
  /**
   * @description 用于初始化一个 ClaimIdentity 类型的对象实例。
   */
  constructor() {
    this._claims = [
      new Claim(ClaimType.userName, undefined),
      new Claim(ClaimType.name, undefined),
      new Claim(__niaInternalVariables.security.authenticated_tag, undefined),
    ];
  }

  /**
   * @description 添加一个身份信息点。
   * @param {Claim} claim 身份信息点。
   * @returns {ClaimIdentity}
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.057
   */
  addClaim(claim) {
    if (!claim?.name) throw new ArgumentNullException("cliam");

    let idx = this._claims.findIndex((v) => {
      return v.name == claim.name;
    });

    if (idx < 0) {
      this._claims.push(claim);
    } else {
      console.warn(
        "警告：Claims 中已经包含了描述名称为 “%s” 的信息点，AddClaim 操作将进行覆盖。",
        claim.name
      );
      this._claims[idx] = claim;
    }

    return this;
  }

  /**
   * @description 获取指定描述名称的信息点。
   * @param {String} name 描述名称。
   * @returns {Claim}
   * @see {Claim}
   * @method
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.109
   */
  getClaim(name = ClaimType.userName) {
    return this._claims.find((v) => {
      return v.name == name;
    });
  }

  /**
   * @description 获取一个字符串，用于表示当前的用户姓名。
   * @type {String}
   * @readonly
   * @property
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.113
   */
  get name() {
    let val = this.getClaim(ClaimType.name)?.value;
    if (!val) return undefined;
    else return Claim.decryptValue(val);
  }

  /**
   * @description 获取一个值，用于表示是否已经经过身份认证。
   * @type {Boolean}
   * @readonly
   * @property
   * @public
   * @author Wang Yucai
   * @version 2021.3.1.118
   */
  get isAuthenticated() {
    let tagVal = this.getClaim(
      __niaInternalVariables.security.authenticated_tag
    )?.value;

    if (!tagVal) return false;
    return true;
  }
}
