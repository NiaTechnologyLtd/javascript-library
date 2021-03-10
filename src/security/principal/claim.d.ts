import { ClaimTypes } from "./claim-types";
export declare class Claim {
    name: string;
    value: string;
    constructor(name: string | ClaimTypes, value?: string);
    isValid(): boolean;
}
