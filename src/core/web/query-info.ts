/**
 * ************************************************************************************************
 * Copyright © 2006 - 2021 Wang Yucai. All rights reserved.
 * Licensed under the MIT License See LICENSE in the project root for license information.
 * ************************************************************************************************
 */

import * as $query_string from "querystring";
import { ExceptionHelper } from "../exception-helper";
import { Guard } from "../guard";
import { WebUtilities } from "./web-utilities";

/**
 * 提供了 URL 查询字符串相关的方法。
 * @class
 * @public
 * @author Wang Yucai
 */
export class QueryInfo {
  private _keyOfQueryString: string = "";
  private _valueOfQueryString: string | undefined = undefined;

  /**
   * 用于初始化一个 QueryInfo 类型的对象实例。
   * @param {String} key 查询字符串标识名称。
   * @param {String} value 查询字符串值。
   */

  constructor(key: string, value?: any) {
    this.key = key;
    this.value = value;
  }

  /**
   * 设置或获取一个字符串，用于表示 URL 查询字符串标识名称。
   * @property
   * @public
   * @type {String}
   */
  public get key(): string {
    return this._keyOfQueryString;
  }

  /**
   * 设置或获取一个字符串，用于表示 URL 查询字符串标识名称。
   * @property
   * @public
   * @type {String}
   */
  public set key(value: string) {
    ExceptionHelper.argumentNotSupport(value, "Property__key");

    this._keyOfQueryString = value;
  }

  /**
   * 设置或获取一个字符串，用于表示 URL 查询字符串值。
   * @property
   * @public
   * @type {String}
   */
  public get value(): string | undefined {
    return this._valueOfQueryString;
  }

  /**
   * 设置或获取一个字符串，用于表示 URL 查询字符串值。
   * @property
   * @public
   * @type {String}
   */
  public set value(v: string | undefined) {
    this._valueOfQueryString = Guard.safeGet(v, "").toString();
  }

  /**
   * 获取 URL 查询字符串。
   * @override
   * @method
   * @returns {String}
   * @public
   */
  public toString(): string {
    if (!this.key) return "";
    let qsk = this.key;
    let qsv = WebUtilities.urlEncode2(this.value ? this.value.toString() : "");
    return `{qsk}={qsv}`;
  }

  /**
   * 获取 URL 地址中所有的查询对象信息。
   * @param {String} queryStr URL 查询地址。即 window.location.search 字段。
   * @returns {Array<QueryInfo>}
   * @static
   * @method
   * @public
   */
  public static parse(queryStr?: string): Array<QueryInfo> {
    let queries = new Array<QueryInfo>();
    let qs = Guard.safeGet(queryStr, "").toString();
    if (!Guard.isNullOrEmpty(qs)) {
      let internal = $query_string.parse(qs);
      for (let k in internal) {
        queries.push(new QueryInfo(k, internal[k]));
      }
    }

    return queries;
  }
}
