import { Environment } from "./environment";
var _applicationEnv = new Environment();
export var AppContext = {
    current: {
        env: _applicationEnv,
    },
};
