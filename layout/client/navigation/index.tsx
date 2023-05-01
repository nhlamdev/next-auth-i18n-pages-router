import { Popover, Stack, Typography } from '@mui/material';
import { ClientHomeLoginControl } from './login-control';
import { HomeClineProfileControl } from './profile-control';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export const NavigationClientComponent = () => {
    const { data: session, status } = useSession();

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
            <Stack direction="row" sx={{ flex: 1, gap: '50px', alignItems: 'center' }}>
                <Stack sx={{ cursor: 'pointer' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Home</Typography>
                </Stack>
                <Stack direction="row" sx={{ gap: '10px' }}>
                    <Link href="/" style={{ cursor: 'pointer' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#514538' }}>
                            Bài viết
                        </Typography>
                    </Link>
                    <Link href="/series" style={{ cursor: 'pointer' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#514538' }}>
                            Chuỗi
                        </Typography>
                    </Link>
                </Stack>
            </Stack>

            {status === 'loading' && <Stack>loading</Stack>}
            {status === 'authenticated' && <HomeClineProfileControl />}
            {status === 'unauthenticated' && <ClientHomeLoginControl />}
        </Stack>
    );
};
