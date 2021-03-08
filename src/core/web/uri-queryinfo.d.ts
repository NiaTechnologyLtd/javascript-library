import { KeyValuePair } from "../kvp";
export declare class UriQueryInfo extends KeyValuePair<string, string> {
    constructor(key: string, value?: string);
    toString(): string;
    static fromUriSearchString(searchStr: string): UriQueryInfo[];
}
