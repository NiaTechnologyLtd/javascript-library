import { Environment } from "./environment";
import { LocaleStoreModes } from "./localestore-modes";
export declare const AppContext: {
    current: {
        env: Environment;
    };
    client: {
        defaultStorageMode: LocaleStoreModes;
    };
};
