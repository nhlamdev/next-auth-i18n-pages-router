import { Stack, Typography } from '@mui/material';
import { AddContentToSeriesDialog } from './dialog/add-content';

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
                        <Typography>{v.contents.length}</Typography>
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
                            backgroundColor: '#fff98c',
                            border: '1px solid #fff98c',
                            borderRadius: '5px',
                            transition: 'all ease .3s',
                            cursor: 'pointer',
                            '&:hover ': {
                                boxShadow:
                                    '#fff98c40 0px 0px 0px 2px, #fff98c65 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                            },
                        }}
                    >
                        <Typography sx={{ color: '#000', fontSize: '14px' }}>Bài viết</Typography>
                    </Stack>

                    <Stack
                        sx={{
                            padding: '10px 20px',
                            backgroundColor: '#fff',
                            border: '1px solid #ff304f',
                            borderRadius: '5px',
                            transition: 'all ease .3s',
                            cursor: 'pointer',
                            '&:hover ': {
                                boxShadow:
                                    '#ff304f40 0px 0px 0px 2px, #ff304f65 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                            },
                        }}
                    >
                        <Typography sx={{ color: '#ff304f', fontSize: '14px' }}>Xoá</Typography>
                    </Stack>
                </Stack>
            ))}
            <AddContentToSeriesDialog />
        </Stack>
    );
};
