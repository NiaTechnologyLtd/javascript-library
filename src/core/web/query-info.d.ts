export declare class QueryInfo {
    private _keyOfQueryString;
    private _valueOfQueryString;
    constructor(key: string, value?: any);
    get key(): string;
    set key(value: string);
    get value(): string | undefined;
    set value(v: string | undefined);
    toString(): string;
    static parse(queryStr?: string): Array<QueryInfo>;
}
