import { Stack, Typography } from '@mui/material';

export const ContentTableHeadComponent = () => {
    return (
        <Stack sx={{ gap: '2px' }} direction="row">
            <Stack
                sx={{
                    width: '10%',
                    padding: '5px 10px',
                    border: '1px solid black',
                    borderRadius: '5px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    stt
                </Typography>
            </Stack>
            <Stack
                sx={{
                    width: '60%',
                    padding: '5px 10px',
                    border: '1px solid black',
                    borderRadius: '5px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    Bài viết
                </Typography>
            </Stack>
            <Stack
                sx={{
                    width: '10%',
                    padding: '5px 10px',
                    border: '1px solid black',
                    borderRadius: '5px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    Lượt xem
                </Typography>
            </Stack>
            <Stack
                sx={{
                    width: '10%',
                    padding: '5px 10px',
                    border: '1px solid black',
                    borderRadius: '5px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    Bình luận
                </Typography>
            </Stack>
            <Stack
                sx={{
                    width: '10%',
                    padding: '5px 10px',
                    border: '1px solid black',
                    borderRadius: '5px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 700,
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    Thao tác
                </Typography>
            </Stack>
        </Stack>
    );
};
