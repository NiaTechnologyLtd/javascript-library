export interface IConfiguration {
    exist(name: string): boolean;
    get(name: string): string | undefined;
}
