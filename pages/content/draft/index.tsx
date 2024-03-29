import ApiCaller from '@/api';
import { TableContentComponent } from '@/components/table-content';
import { Pagination, Stack } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IContent } from '@/interface';

const ContentsDraftPage: NextPage & {
    layout?: string;
} = () => {
    const router = useRouter();
    const { page } = router.query;

    const [data, setData] = useState<IContent[]>([]);
    const [max, setMax] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const current =
        page && !Number.isNaN(Number(page)) && Number.isInteger(Number(page))
            ? Number(page) - 1
            : 0;

    useEffect(() => {
        setLoading(true);
        ApiCaller.content
            .getContents({ current: current, limit: 10, complete: 'false' })
            .then((res) => {
                const { data, max } = res.data;
                setData(data);
                setMax(max);
                setLoading(false);
            });
    }, [current]);

    return (
        <Stack
            alignItems="center"
            sx={{
                gap: '20px',
                justifyContent: 'space-between',
                padding: '10px',
            }}
        >
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TableContentComponent data={data} />

            <Pagination
                onChange={(e, page) => {
                    router.replace(`/content/draft?page=${page}`);
                }}
                count={Math.round(max / 10)}
                defaultPage={current + 1}
                siblingCount={1}
                variant="outlined"
            />
        </Stack>
    );
};

ContentsDraftPage.layout = 'client';
export default ContentsDraftPage;
