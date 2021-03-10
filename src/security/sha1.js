import * as CryptoJS from "crypto-js";
import { HashAlgorithm } from "./hashalgorithm-base";
import { HashAlgorithmNames } from "./hashalgorithm-names";
export class SHA1CryptoServiceProvider extends HashAlgorithm {
    constructor() {
        super(HashAlgorithmNames.SHA1);
    }
    createProvider() {
        return CryptoJS.SHA1;
    }
}
export const SHA1 = new SHA1CryptoServiceProvider();
