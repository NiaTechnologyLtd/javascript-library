var Guard = (function () {
    function Guard() {
    }
    Guard.safeGet = function (value, safeValue) {
        return value !== null && value !== void 0 ? value : safeValue;
    };
    return Guard;
}());
export { Guard };
