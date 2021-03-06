import { IConfiguration } from "./configuration-interface";
export declare class Configuration implements IConfiguration {
    private static _instance;
    get(name: string): string | undefined;
    exist(name: string): boolean;
    static createInstance(): IConfiguration;
}
