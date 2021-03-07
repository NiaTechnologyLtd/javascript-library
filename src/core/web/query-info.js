import * as $query_string from "querystring";
import { ExceptionHelper } from "../exception-helper";
import { Guard } from "../guard";
import { WebUtilities } from "./web-utilities";
export class QueryInfo {
    constructor(key, value) {
        this._keyOfQueryString = "";
        this._valueOfQueryString = undefined;
        this.key = key;
        this.value = value;
    }
    get key() {
        return this._keyOfQueryString;
    }
    set key(value) {
        ExceptionHelper.argumentNotSupport(value, "Property__key");
        this._keyOfQueryString = value;
    }
    get value() {
        return this._valueOfQueryString;
    }
    set value(v) {
        this._valueOfQueryString = Guard.safeGet(v, "").toString();
    }
    toString() {
        if (!this.key)
            return "";
        let qsk = this.key;
        let qsv = WebUtilities.urlEncode2(this.value ? this.value.toString() : "");
        return `{qsk}={qsv}`;
    }
    static parse(queryStr) {
        let queries = new Array();
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
