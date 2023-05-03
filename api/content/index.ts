import axiosClient from '@/api/axios-custom';

export class ContentApi {
    private static instance: ContentApi;
    private axiosInstance = axiosClient;
    constructor() {}
    public static getInstance(): ContentApi {
        if (!ContentApi.instance) {
            ContentApi.instance = new ContentApi();
        }

        return ContentApi.instance;
    }

    public getAllContent() {}
    public getAllSeries(current: number, limit: number) {
        return this.axiosInstance.get(`/services/series/${current}/${limit}`);
    }
    public getAllTag() {}

    public createContent(data: any) {
        return this.axiosInstance.post('/services/content', data, {
            headers: { 'content-type': 'multipart/form-data' },
        });
    }
    public createSeries(title: string, summary: string) {
        return this.axiosInstance.post(`/services/series/`, { title: title, summary: summary });
    }

    public deleteSeries(id: string) {
        return this.axiosInstance.delete(`/services/series/${id}`);
    }
    public deleteContent() {}
}
