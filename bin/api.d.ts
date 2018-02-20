import { interfaces } from "inversify";
import "isomorphic-fetch";
export interface ApiResponse<T> {
    response: Response;
    body?: T;
}
export declare abstract class ApiClient {
    protected _basePath: string;
    protected accessToken: string;
    constructor(basePath?: string, accessToken?: string);
    protected readonly defaultHeaders: {};
    protected queryParams(params: any): string;
    execute<T>(method: string, path: string, queryParameters: {}, headerParams: {}, formParams: {}, isFile: boolean, isResponseFile: boolean, bodyParam: any, ...authMethods: string[]): Promise<ApiResponse<T>>;
}
export declare function registerApiClient<T extends ApiClient>(iocContainer: interfaces.Container, serviceIdentifier: interfaces.ServiceIdentifier<T>, ctor: new (basePath?: string, accessToken?: string) => T, basePath: string, token?: string | (() => string)): void;
