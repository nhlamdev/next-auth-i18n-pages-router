import axiosInstance from '@/api/axios-custom';

export const contentApi = {
    getContents(data: {
        current: number;
        limit: number;
        search?: string;
        series?: string;
        complete?: 'all' | 'true' | 'false';
    }) {
        const searchText = data.search ? data.search : '';
        const seriesText = data.series ? data.series : '';
        const complete = data.complete ? data.complete : '';

        return axiosInstance.get(
            `/services/content/${data.current}/${data.limit}?search=${searchText}&series=${seriesText}&complete=${complete}`
        );
    },
    getContentsById(id: string) {
        return axiosInstance.get(`/services/content/${id}`);
    },
    createContent(data: any) {
        return axiosInstance.post('/services/content', data, {
            headers: { 'content-type': 'multipart/form-data' },
        });
    },
    deleteContent() {},
};
