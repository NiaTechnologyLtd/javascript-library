import * as $npm_querystring from "querystring";
import { ExceptionHelper } from "../exception-helper";
import { Guard } from "../guard";
import { KeyValuePair } from "../kvp";
import { WebUtilities } from "./web-utilities";
export class UriQueryInfo extends KeyValuePair {
    constructor(key, value) {
        super(key, Guard.safeGet(value, "").toString());
        ExceptionHelper.argumentNotSupport(key, "key");
    }
    toString() {
        let k = this.key;
        let v = WebUtilities.urlEncode2(this.value);
        return `{k}={v}`;
    }
    static fromUriSearchString(searchStr) {
        var _a;
        let queries = [];
        if (Guard.isNullOrEmpty(searchStr))
            return queries;
        let args = $npm_querystring.parse(searchStr);
        for (let k in args) {
            queries.push(new UriQueryInfo(k, (_a = args[k]) === null || _a === void 0 ? void 0 : _a.toString()));
        }
        return queries;
    }
}
