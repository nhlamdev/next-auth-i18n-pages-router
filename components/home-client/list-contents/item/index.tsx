import { Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
export const ClientHomeListContentItem = () => {
    const matches = useMediaQuery('(min-width:900px)');
    const tags = ['vue', 'react', 'javascript', 'python', 'django', 'typescript', 'c#', 'java'];
    return (
        <Stack
            direction="row"
            sx={{
                gap: '10px',
                transition: 'all ease .5s',
                cursor: 'pointer',
                padding: '10px',
                '&:hover ': {
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                },
            }}
        >
            <Stack style={{ position: 'relative' }}>
                <Image
                    src="/a_100421840_m_601_en_m1_1013_638.jpg"
                    width={200 * (matches ? 1 : 0.8)}
                    height={150 * (matches ? 1 : 0.8)}
                    quality={75}
                    style={{
                        objectFit: 'cover',
                        borderRadius: '5px',
                    }}
                    alt="photo"
                />
            </Stack>
            {/* --------------- */}
            <Stack justifyContent="space-between">
                <Stack sx={{ gap: '5px' }}>
                    <Typography sx={{ fontWeight: 700, fontSize: matches ? '16px' : '14px' }}>
                        lorem
                    </Typography>

                    <Typography sx={{ fontWeight: 300, fontSize: matches ? '14px' : '12px' }}>
                        03/04/2023
                    </Typography>
                </Stack>

                <Stack
                    sx={{
                        padding: '5px 10px',
                        borderRadius: '5px',
                        border: '2px solid black',
                        width: 'fit-content',
                    }}
                >
                    <Typography sx={{ fontSize: matches ? '12px' : '10px', fontWeight: 700 }}>
                        Reactjs
                    </Typography>
                </Stack>

                <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
                    {tags.map((t) => (
                        <Stack
                            key={`tags-${t}`}
                            sx={{
                                padding: '5px',
                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                borderRadius: '5px',
                            }}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography sx={{ fontSize: matches ? '12px' : '10px' }}>
                                {t}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};
