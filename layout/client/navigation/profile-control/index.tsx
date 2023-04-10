import { Popover, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
export const HomeClineProfileControl = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const { data: session, status } = useSession();
    return (
        <>
            <Stack onClick={(e) => setAnchorEl(e.currentTarget)}>
                <Image
                    src={session?.user?.image ? session?.user?.image : '/avatar.png'}
                    width={40}
                    height={40}
                    alt="photo"
                    style={{ borderRadius: '25px' }}
                />
            </Stack>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Stack sx={{ gap: '10px' }}>
                    <Stack
                        direction="row"
                        sx={{
                            gap: '10px',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            transition: 'all ease .5s',
                            '&:hover ': {
                                backgroundColor: '#402E32',
                                '& > p': {
                                    color: '#fff',
                                },
                            },
                        }}
                        alignItems="center"
                    >
                        <Typography sx={{ fontSize: '14px', transition: 'all ease .5s' }}>
                            Tạo bài Viết
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                            padding: '10px 20px',
                            gap: '10px',
                            cursor: 'pointer',
                            transition: 'all ease .5s',
                            '&:hover ': {
                                backgroundColor: '#402E32',
                                '& > p': {
                                    color: '#fff',
                                },
                            },
                        }}
                        onClick={() => signOut()}
                    >
                        <Typography sx={{ fontSize: '14px', transition: 'all ease .5s' }}>
                            Logout
                        </Typography>
                    </Stack>
                </Stack>
            </Popover>
        </>
    );
};