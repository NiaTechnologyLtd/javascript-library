import { HashAlgorithm } from "./hashalgorithm-base";
export declare class MD5CryptoServiceProvider extends HashAlgorithm {
    constructor();
    protected createProvider(): Function;
}
export declare const MD5: MD5CryptoServiceProvider;
