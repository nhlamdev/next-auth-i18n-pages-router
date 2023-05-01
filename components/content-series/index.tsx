import { Button, Stack, Typography } from '@mui/material';

interface SeriesItem {
    contents: any[];
    created_at: string;
    summary: string;
    title: string;
    updated_at: string;
    _id: string;
}

export interface ListContentInSeriesProps {
    series: SeriesItem[];
}

export const ListContentInSeries = (props: ListContentInSeriesProps) => {
    const { series } = props;
    return (
        <Stack sx={{ gap: '10px', width: '100%', flex: 1 }} alignItems="center">
            {series.map((v) => (
                <Stack
                    key={'sereis-item-' + v._id}
                    direction="row"
                    sx={{
                        gap: '10px',
                        width: '80%',
                        height: '100px',
                        padding: '10px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        boxShadow:
                            'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                    }}
                    alignItems="center"
                >
                    <Stack
                        sx={{
                            height: '100%',
                            aspectRatio: '1/1',
                            backgroundColor: '#B8A99A',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '5px',
                        }}
                    >
                        <Typography>3</Typography>
                    </Stack>

                    <Stack sx={{ flex: 1, height: '100%' }}>
                        <Stack>
                            <Typography sx={{ fontSize: '14px' }}>{v.title}</Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{ fontSize: '12px' }}>{v.summary}</Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        sx={{
                            padding: '10px 20px',
                            backgroundColor: '#402E32',
                            borderRadius: '5px',
                            transition: 'all ease .3s',
                            '&:hover ': {
                                boxShadow:
                                    'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                            },
                        }}
                    >
                        <Typography sx={{ color: '#fff', fontSize: '14px' }}>Thêm</Typography>
                    </Stack>
                </Stack>
            ))}
        </Stack>
    );
};
