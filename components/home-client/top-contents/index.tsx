import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
export const HomeTopContents = () => {
    return (
        <Stack
            sx={{
                display: {
                    xs: 'none',
                    md: 'flex',
                },
                flex: 2,
                gap: '10px',
                padding: '10px',
            }}
            alignItems="center"
        >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((v) => {
                return (
                    <Stack
                        key={v + 'asdas'}
                        style={{
                            position: 'relative',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            overflow: 'hidden',
                            border: '1px solid white',
                            boxShadow:
                                'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                        }}
                    >
                        <Stack
                            sx={{
                                position: 'absolute',
                                top: '10px',
                                left: 0,
                                backgroundColor: 'White',
                                padding: '5px 10px',
                                borderRadius: '0px 5px 5px 0px',
                            }}
                        >
                            <Typography sx={{ fontSize: '12px' }}>react</Typography>
                        </Stack>
                        <Image
                            src="/a_100421840_m_601_en_m1_1013_638.jpg"
                            width={200}
                            height={150}
                            quality={75}
                            style={{ objectFit: 'cover' }}
                            alt="photo"
                        />
                        <Stack
                            sx={{
                                position: 'absolute',
                                backgroundColor: '#00000080',
                                bottom: 0,
                                padding: '10px',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#fff',
                                    fontSize: '12px',
                                    overflow: 'hidden',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    lineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    wordBreak: 'break-word',
                                }}
                            >
                                asdassssssssssssssssssssssssssssssssssdasdasdasdadasdasdqwwwwwwwwwwwdasdasdasdaaaaaaaaaasdad
                            </Typography>
                        </Stack>
                    </Stack>
                );
            })}
        </Stack>
    );
};
