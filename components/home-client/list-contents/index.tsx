import { Pagination, Stack, Typography } from '@mui/material';
import { ClientHomeListContentItem } from './item';
import { BiSort } from 'react-icons/bi';
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
                <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                        padding: '10px 20px',
                        // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        width: 'fit-content',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        gap: '10px',
                        border: '1px solid #402E32',
                    }}
                >
                    <BiSort style={{ fontSize: '20px' }} />
                    <Typography sx={{ fontSize: '12px' }}>Sắp xếp</Typography>
                </Stack>
            </Stack>
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
