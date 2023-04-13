import { Pagination, Stack, Typography } from '@mui/material';
import { ClientHomeListContentItem } from './item';

export const HomeListContents = () => {
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
            <Stack sx={{ width: '100%' }}>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((v) => {
                    return <ClientHomeListContentItem key={v} />;
                })}
            </Stack>
            <Pagination
                onChange={(e, page) => {
                    console.log(page);
                }}
                count={20}
                defaultPage={1}
                siblingCount={1}
                variant="outlined"
            />
        </Stack>
    );
};
