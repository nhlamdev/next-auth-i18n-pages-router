import { Popover, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';

export const ClientHomeLoginControl = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    return (
        <>
            <Stack
                sx={{ padding: '10px', cursor: 'pointer' }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <Typography sx={{ fontSize: '12px' }}>Đăng nhập</Typography>
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
                <Stack sx={{ gap: '10px', width: '200px' }}>
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
                        onClick={() => signIn('google')}
                    >
                        <Image src="/share/google.svg" width={25} height={25} alt="photo" />
                        <Typography sx={{ fontSize: '12px', transition: 'all ease .5s' }}>
                            Login && Google
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
                        onClick={() => signIn('github')}
                    >
                        <Image src="/share/github.svg" width={25} height={25} alt="photo" />
                        <Typography sx={{ fontSize: '14px', transition: 'all ease .5s' }}>
                            Login && Github
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
                        onClick={() => signIn('discord')}
                    >
                        <Image src="/share/discord.svg" width={25} height={25} alt="photo" />
                        <Typography sx={{ fontSize: '14px', transition: 'all ease .5s' }}>
                            Login && Discord
                        </Typography>
                    </Stack>
                </Stack>
            </Popover>
        </>
    );
};
