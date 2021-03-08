import { HashAlgorithmNames } from "./hashalgorithm-names";
export class HashAlgorithm {
    constructor(algName = HashAlgorithmNames.MD5) {
        this._algorithmName = HashAlgorithmNames.MD5;
        this.algorithmName = this._algorithmName;
        this._algorithmName = algName;
    }
    computeHash(s) {
        return this.createProvider()(s);
    }
}
