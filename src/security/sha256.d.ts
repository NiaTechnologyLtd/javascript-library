import { HashAlgorithm } from "./hashalgorithm-base";
export declare class SHA256CryptoServiceProvider extends HashAlgorithm {
    protected createProvider(): Function;
    constructor();
}
export declare const SHA256: SHA256CryptoServiceProvider;
