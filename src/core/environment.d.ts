import { EnvironmentNames } from "./environment-names";
export declare class Environment {
    private _configSectionName;
    static readonly DefaultEnvironmentName: EnvironmentNames;
    get currentEnvironment(): string;
    get isProduction(): boolean;
    get isTesting(): boolean;
    get isDevelopment(): boolean;
}
