import * as CryptoJS from "crypto-js";
import { HashAlgorithm } from "./hashalgorithm-base";
import { HashAlgorithmNames } from "./hashalgorithm-names";
export class SHA256CryptoServiceProvider extends HashAlgorithm {
    createProvider() {
        return CryptoJS.SHA256;
    }
    constructor() {
        super(HashAlgorithmNames.SHA256);
    }
}
export const SHA256 = new SHA256CryptoServiceProvider();
