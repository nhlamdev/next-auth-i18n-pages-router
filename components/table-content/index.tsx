import { Stack } from '@mui/material';
import { ContentTableHeadComponent } from './head';
import { TableContentRowComponent } from './row';

interface TableContentComponentProps {
    caseView: 'draft' | 'public';
}

export const TableContentComponent = (props: TableContentComponentProps) => {
    const { caseView } = props;
    return (
        <Stack sx={{ width: '80%', padding: '10px' }}>
            <ContentTableHeadComponent />
            <TableContentRowComponent />
        </Stack>
    );
};
