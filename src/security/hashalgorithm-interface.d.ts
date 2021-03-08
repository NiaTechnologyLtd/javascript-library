export interface IHashAlgorithm {
    computeHash(s: string): string;
    readonly algorithmName: string;
}
