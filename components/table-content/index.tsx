import { Stack } from '@mui/material';
import { ContentTableHeadComponent } from './head';
import { TableContentRowComponent } from './row';
import { IContent } from '@/interface';

interface TableContentComponentProps {
    data: IContent[];
}

export const TableContentComponent = (props: TableContentComponentProps) => {
    const { data } = props;
    return (
        <Stack sx={{ width: '80%', padding: '10px', gap: '5px' }}>
            <ContentTableHeadComponent />

            {data.map((c, index) => {
                return (
                    <TableContentRowComponent
                        key={`content-item-${c._id}`}
                        content={c}
                        index={index}
                    />
                );
            })}
        </Stack>
    );
};
