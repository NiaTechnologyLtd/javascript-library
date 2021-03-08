import { IKeyValuePair } from "./kvp-interface";
export declare class KeyValuePair<TKey, TValue> implements IKeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
    constructor(key: TKey, value: TValue);
}
