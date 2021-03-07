export class StringBuilder {
    constructor(s) {
        this._buffer = [];
        if (s) {
            this._buffer.push(s);
        }
    }
    append(s) {
        if (s) {
            this._buffer.push(s);
        }
        return this;
    }
    appendLine(s) {
        return this.append(s).append("\r\n");
    }
}
