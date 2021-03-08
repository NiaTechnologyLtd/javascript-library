import { IHashAlgorithm } from "./hashalgorithm-interface";
export declare abstract class HashAlgorithm implements IHashAlgorithm {
    private _algorithmName;
    constructor(algName?: string);
    computeHash(s: string): string;
    algorithmName: string;
    protected abstract createProvider(): Function;
}
