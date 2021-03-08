import { HashAlgorithm } from "./hashalgorithm-base";
import { HashAlgorithmNames } from "./hashalgorithm-names";
export class MD5CryptoServiceProvider extends HashAlgorithm {
    constructor() {
        super(HashAlgorithmNames.MD5);
    }
    createProvider() {
        return CryptoJS.MD5;
    }
}
export const MD5 = new MD5CryptoServiceProvider();
