export interface IRegex {
    isMatch(input: string, pattern: RegExp | string): boolean;
}
