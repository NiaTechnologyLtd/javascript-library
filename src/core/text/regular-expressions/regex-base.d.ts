import { IRegex } from "./regex-interface";
export declare abstract class RegexBase implements IRegex {
    isMatch(input: string, pattern: string | RegExp): Boolean;
    protected resetLastIndex(pattern: RegExp): void;
    protected getPattern(pattern: string | RegExp): RegExp;
}
