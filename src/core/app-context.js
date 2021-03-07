import { Environment } from "./environment";
const _applicationEnv = new Environment();
export const AppContext = {
    current: {
        env: _applicationEnv,
    },
};
