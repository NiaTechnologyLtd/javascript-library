/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import Cookies from "js-cookie";
import { ExceptionHelper } from "./exception-helper";
import { Guard } from "./guard";
import { IKeyValuePair } from "./kvp-interface";

/**
 * 提供了 Cookie 条目相关的属性、方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class CookieItem implements IKeyValuePair<string, string | undefined> {
  /**
   * 设置或获取一个字符串，用于表示 Cookie 的标识名称。
   * @property
   * @type {String}
   * @public
   */
  public key: string;
  /**
   * 设置或获取一个字符串，用于表示 Cookie 的值。
   * @property
   * @type {String}
   * @public
   */
  public value: string | undefined;
  /**
   * 设置或获取一个值，用于表示 Cookie 的超时设置。
   * @property
   * @type {Number | Date}
   * @public
   */
  public expires: number | Date | undefined;
  /**
   * 设置或获取一个值，用于表示 Cookie 值是否需要加密。
   * @property
   * @type {Boolean}
   * @public
   */
  public secure: boolean = true;
  /**
   * 设置或获取一个字符串，用于表示 Cookie 适用的域名。
   * @property
   * @type {Boolean}
   * @public
   */
  public domain: string | undefined = window.location.hostname;
  /**
   * 设置或获取一个字符串，用于表示 Cookie 适用的路径。
   * @property
   * @type {String}
   * @public
   */
  public path: string | undefined = "/";

  /**
   * 用于初始化一个 constructor 类型的对象实例。
   * @param {String} key Cookie 标识名称。
   * @param {String} value Cookie 值。
   * @param {Number | Date} expires Cookie 超时值。
   * @param {Boolean} secure Cookie 是否需要加密。
   * @param {String} domain Cookie 适用的域名。
   * @param {String} path Cookie 的路径。
   */
  constructor(
    key: string,
    value?: string,
    expires?: number | Date,
    secure: boolean = true,
    domain?: string,
    path: string = "/"
  ) {
    this.key = key;
    this.value = value;
    this.expires = expires;
    this.secure = secure;
    this.domain = domain;
    this.path = path;
  }

  /**
   * 获取一个值，用于表示 Cookie 是否包含值。
   * @property
   * @readonly
   * @type {Boolean}
   * @public
   */
  public get hasValue(): boolean {
    return !Guard.isNullOrEmpty(this.value, false);
  }

  /**
   * 构建 Cookie 存储配置选项。
   * @protected
   * @returns {any}
   */
  protected buildOptions(): any {
    let options = { domain: this.domain, path: this.path, secure: this.secure };
    return this.expires
      ? Object.assign({}, options, { expires: this.expires })
      : options;
  }

  /**
   * 保存 Cookie 值到本地。
   * @method
   * @public
   */
  public save() {
    if (
      !Guard.isNullOrEmpty(this.key) &&
      !Guard.isNullOrEmpty(this.value, false)
    ) {
      Cookies.set(
        this.key,
        Guard.safeGet(this.value, "").toString(),
        this.buildOptions()
      );
    }
  }

  /**
   * 获取指定标识名称的 Cookie 项。
   * @param {String} key Cookie 标识名称。
   * @returns {CookieItem}
   * @static
   * @public
   */
  public static get(key: string): CookieItem {
    ExceptionHelper.argumentNotSupport(key, "key");

    let value = Cookies.get(key);
    return new CookieItem(key, value);
  }

  /**
   * 删除指定标识名称的 Cookie 值。
   * @param {String} key Cookie 标识名称。
   * @public
   * @static
   */
  public static remove(key: string) {
    if (!Guard.isNullOrEmpty(key)) return;
    Cookies.remove(key);
  }
}
