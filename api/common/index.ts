export class CommonApi {
    private static instance: CommonApi;
    constructor() {}
    public static getInstance(): CommonApi {
        if (!CommonApi.instance) {
            CommonApi.instance = new CommonApi();
        }

        return CommonApi.instance;
    }

    public async getAllMemberLogin() {}
}
