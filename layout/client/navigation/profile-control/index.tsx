import { Popover, Stack, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
export const HomeClineProfileControl = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const matches = useMediaQuery('(min-width:900px)');
    const { data: session, status } = useSession();
    return (
        <>
            <Stack
                direction="row"
                sx={{ alignItems: 'center', gap: '10px', cursor: 'pointer' }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <Stack>
                    <Typography sx={{ fontSize: matches ? '14px' : '10px', fontWeight: 600 }}>
                        {session?.user?.name}
                    </Typography>
                </Stack>
                <Stack>
                    <Image
                        src={session?.user?.image ? session?.user?.image : '/avatar.png'}
                        width={40}
                        height={40}
                        alt="photo"
                        style={{ borderRadius: '25px' }}
                    />
                </Stack>
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
                <Stack sx={{ width: '200px' }}>
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
                        <Typography
                            sx={{
                                fontSize: '12px',
                                transition: 'all ease .5s',
                                alignItems: 'center',
                            }}
                        >
                            Trạng thái
                        </Typography>
                    </Stack>{' '}
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
                        <Typography
                            sx={{
                                fontSize: '12px',
                                transition: 'all ease .5s',
                                alignItems: 'center',
                            }}
                        >
                            Quản lý bài viết.
                        </Typography>
                    </Stack>
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
                        <Typography
                            sx={{
                                fontSize: '12px',
                                transition: 'all ease .5s',
                                alignItems: 'center',
                            }}
                        >
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
                        <Typography sx={{ fontSize: '12px', transition: 'all ease .5s' }}>
                            Logout
                        </Typography>
                    </Stack>
                </Stack>
            </Popover>
        </>
    );
};
