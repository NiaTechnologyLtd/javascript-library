var StringBuilder = (function () {
    function StringBuilder(s) {
        this._buffer = [];
        if (s) {
            this._buffer.push(s);
        }
    }
    StringBuilder.prototype.append = function (s) {
        if (s) {
            this._buffer.push(s);
        }
        return this;
    };
    StringBuilder.prototype.appendLine = function (s) {
        return this.append(s).append("\r\n");
    };
    return StringBuilder;
}());
export { StringBuilder };
