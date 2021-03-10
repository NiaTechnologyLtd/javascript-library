import { HashAlgorithm } from "./hashalgorithm-base";
export declare class SHA1CryptoServiceProvider extends HashAlgorithm {
    constructor();
    protected createProvider(): Function;
}
export declare const SHA1: SHA1CryptoServiceProvider;
