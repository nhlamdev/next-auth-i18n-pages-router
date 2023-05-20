import { Stack } from '@mui/material';
import { ContentSeriesChild } from './child';

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
                <ContentSeriesChild key={`${v._id}-seres-item`} item={v} />
            ))}
        </Stack>
    );
};
