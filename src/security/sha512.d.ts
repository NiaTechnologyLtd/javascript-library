import { HashAlgorithm } from "./hashalgorithm-base";
export declare class SHA512CryptoServiceProvider extends HashAlgorithm {
    protected createProvider(): Function;
    constructor();
}
export declare const SHA512: SHA512CryptoServiceProvider;
