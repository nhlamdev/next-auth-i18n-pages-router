import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ApiCaller from '@/api';

interface SeriesItem {
    contents: any[];
    created_at: string;
    summary: string;
    title: string;
    updated_at: string;
    _id: string;
}
interface ControllContentInSeriesDialogProps {
    series: SeriesItem;
}

export const ControllContentInSeriesDialog = (props: ControllContentInSeriesDialogProps) => {
    const { series } = props;

    const [data, setData] = useState([]);
    const [max, setMax] = useState(0);

    useEffect(() => {
        ApiCaller.content.getContents({ current: 0, limit: 6, series: series._id }).then((res) => {
            const { data, max } = res.data;
            setData(data);
            setMax(max);
        });
    }, [series._id]);
    return (
        <Stack
            sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}
            alignItems="center"
            justifyContent="center"
        >
            <Stack
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#00000060',
                    zIndex: 3,
                }}
            ></Stack>
            <Stack
                sx={{
                    zIndex: 4,
                    width: '600px',
                    height: '600px',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    padding: '10px',
                    gap: '20px',
                }}
            >
                <Stack direction="row">
                    <Typography>Bài đăng</Typography>
                </Stack>
                <Stack sx={{ gap: '10px' }}>
                    {data.map((v: any) => {
                        return (
                            <Stack key={`contents-index-series-${v._id}`} direction="row">
                                <Stack>
                                    <Image
                                        src={`/services/${v.image}`}
                                        width={100}
                                        height={60}
                                        quality={75}
                                        style={{
                                            objectFit: 'cover',
                                            boxShadow:
                                                'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                                        }}
                                        alt="photo"
                                    />
                                </Stack>
                                <Stack>
                                    <Typography>{v.title}</Typography>
                                </Stack>
                            </Stack>
                        );
                    })}
                </Stack>
            </Stack>
        </Stack>
    );
};
