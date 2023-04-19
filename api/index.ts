import { CommonApi } from './common';
import { ContentApi } from './content';
export class ApiCaller {
    private static instance: ApiCaller;
    public common: CommonApi = CommonApi.getInstance();
    public content: ContentApi = ContentApi.getInstance();
    constructor() {}

    public static getInstance(): ApiCaller {
        if (!ApiCaller.instance) {
            ApiCaller.instance = new ApiCaller();
        }

        return ApiCaller.instance;
    }
}
export default ApiCaller.getInstance();
