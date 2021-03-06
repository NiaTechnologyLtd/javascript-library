import { IConfiguration } from "./configuration-interface";
export declare class Configuration implements IConfiguration {
    get(name: string): string | undefined;
    exist(name: string): boolean;
}
