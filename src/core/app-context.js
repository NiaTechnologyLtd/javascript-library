import { Environment } from "./environment";
import { LocaleStoreModes } from "./localestore-modes";
const _applicationEnv = new Environment();
export const AppContext = {
    current: {
        env: _applicationEnv,
    },
    client: {
        defaultStorageMode: LocaleStoreModes.SessionStorage,
    },
};
