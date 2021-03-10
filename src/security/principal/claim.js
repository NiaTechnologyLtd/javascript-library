import { Guard } from "../../core/guard";
export class Claim {
    constructor(name, value) {
        this.name = name;
        this.value = Guard.safeGet(value, "");
    }
    isValid() {
        return !Guard.isNullOrEmpty(this.name) && !Guard.isNullOrEmpty(this.value);
    }
}
