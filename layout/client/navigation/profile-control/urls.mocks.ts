interface UrlInterface {
    direct: string;
    name: string;
}

export const Urls: UrlInterface[] = [
    {
        direct: '/content/status',
        name: 'Trạng thái',
    },
    {
        direct: '/content',
        name: 'Bài đăng',
    },
    {
        direct: '/content/new',
        name: 'Viết bài',
    },
];
