import { Popover, Stack, Typography } from '@mui/material';
import { ClientHomeLoginControl } from './login-control';
import { HomeClineProfileControl } from './profile-control';
import { useSession } from 'next-auth/react';

export const NavigationClientComponent = () => {
    const { data: session, status } = useSession();
    console.log('status : ', status);

    return (
        <Stack
            direction="row"
            alignItems="center"
            sx={{
                zIndex: 2,
                top: 0,
                background:
                    'linear-gradient(115.59deg, #FFE081 -9.24%, rgba(197, 169, 77, 0.8) 108%)',
                width: '100%',
                padding: '5px 50px',
                gap: '10px',
                height: '50px',
            }}
        >
            <Stack sx={{ cursor: 'pointer' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Home</Typography>
            </Stack>
            <Stack flex={1}></Stack>

            {status === 'loading' && <Stack>loading</Stack>}
            {status === 'authenticated' && <HomeClineProfileControl />}
            {status === 'unauthenticated' && <ClientHomeLoginControl />}
        </Stack>
    );
};
