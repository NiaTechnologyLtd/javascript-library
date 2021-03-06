export declare class Guard {
    private static readonly _includeWhiteSpacesPattern;
    private static readonly _excludeWhiteSpacesPattern;
    static safeGet(value: any, safeValue?: any): any;
    static isNullOrEmpty(s: string, includeWhiteSpaces?: boolean): boolean;
}
