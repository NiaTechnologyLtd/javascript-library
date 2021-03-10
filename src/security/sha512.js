import CrypoJs from "crypto-js";
import { HashAlgorithm } from "./hashalgorithm-base";
import { HashAlgorithmNames } from "./hashalgorithm-names";
export class SHA512CryptoServiceProvider extends HashAlgorithm {
    createProvider() {
        return CrypoJs.SHA512;
    }
    constructor() {
        super(HashAlgorithmNames.SHA512);
    }
}
export const SHA512 = new SHA512CryptoServiceProvider();
