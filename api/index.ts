import { commonApi } from './common';
import { contentApi } from './content';
import { seriesApi } from './series';
export class ApiCaller {
    private static instance: ApiCaller;
    public common = commonApi;
    public content = contentApi;
    public series = seriesApi;
    constructor() {}

    public static getInstance(): ApiCaller {
        if (!ApiCaller.instance) {
            ApiCaller.instance = new ApiCaller();
        }

        return ApiCaller.instance;
    }
}

export default ApiCaller.getInstance();
