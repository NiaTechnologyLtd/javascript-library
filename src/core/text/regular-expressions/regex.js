import { RegexBase } from "./regex-base";
export class Regex extends RegexBase {
    static createInstance() {
        if (!Regex._instance) {
            Regex._instance = new Regex();
        }
        return Regex._instance;
    }
}
Regex._instance = undefined;
