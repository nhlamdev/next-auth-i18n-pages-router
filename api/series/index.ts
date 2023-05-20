import axiosInstance from '@/api/axios-custom';

export const seriesApi = {
    getSeries(current: number, limit: number) {
        return axiosInstance.get(`/services/series/${current}/${limit}`);
    },
    createSeries(title: string, summary: string) {
        return axiosInstance.post(`/services/series/`, { title: title, summary: summary });
    },
    deleteSeries(id: string) {
        return axiosInstance.delete(`/services/series/${id}`);
    },
};
