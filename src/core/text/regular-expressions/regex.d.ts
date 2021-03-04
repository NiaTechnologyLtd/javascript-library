import { RegexBase } from "./regex-base";
import { IRegex } from "./regex-interface";
export declare class Regex extends RegexBase implements IRegex {
    private static _instance;
    static createInstance(): IRegex;
}
