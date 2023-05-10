import ApiCaller from '@/api';
import { IContent } from '@/interface';
import { Pagination, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDebouncedState } from '@mantine/hooks';
import { ClientHomeListContentItem } from './item';
export const HomeListContents = () => {
    const router = useRouter();
    const { page } = router.query;

    const [data, setData] = useState<IContent[]>([]);
    const [max, setMax] = useState<number>(0);
    const [search, setSearch] = useDebouncedState<string>('', 500);
    const [loading, setLoading] = useState<boolean>(false);

    const current =
        page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
            ? Number(page) - 1
            : 0;

    useEffect(() => {
        setLoading(true);
        if (search && search !== '') {
            ApiCaller.content.getAllContent(current, 10, search).then((res) => {
                const { data, max } = res.data;
                setData(data);
                setMax(max);
                setLoading(false);
            });
        } else {
            ApiCaller.content.getAllContent(current, 10).then((res) => {
                const { data, max } = res.data;
                setData(data);
                setMax(max);
                setLoading(false);
            });
        }
    }, [current, search]);

    return (
        <Stack
            sx={{
                flex: {
                    xs: 1,
                    md: 10,
                },
                padding: '10px',
                gap: '20px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Stack sx={{ padding: '10px', width: '90%' }}>
                <TextField
                    fullWidth
                    placeholder="Nhập bài viết mà bạn muốn tìm"
                    onChange={(e) => {
                        const { value } = e.target;
                        setSearch(value);
                    }}
                />
            </Stack>

            <Stack sx={{ width: '100%' }}>
                {data.map((content) => {
                    return <ClientHomeListContentItem key={content._id} content={content} />;
                })}
            </Stack>
            <Pagination
                onChange={(e, page) => {
                    router.replace(`?page=${page}`);
                }}
                count={Math.round(max / 10)}
                defaultPage={current + 1}
                siblingCount={1}
                variant="outlined"
            />
        </Stack>
    );
};
