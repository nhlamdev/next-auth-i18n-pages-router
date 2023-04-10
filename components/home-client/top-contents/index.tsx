import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
export const HomeTopContents = () => {
    return (
        <Stack sx={{ flex: 3, gap: '10px', padding: '10px' }} alignItems="center">
            <Stack style={{ position: 'relative' }}>
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
                    style={{ objectFit: 'cover', borderRadius: '5px' }}
                    alt="photo"
                />
            </Stack>
            <Stack style={{ position: 'relative' }}>
                <Image
                    src="/a_100421840_m_601_en_m1_1013_638.jpg"
                    width={200}
                    height={150}
                    quality={75}
                    style={{ objectFit: 'cover', borderRadius: '5px' }}
                    alt="photo"
                />
            </Stack>
            <Stack style={{ position: 'relative' }}>
                <Image
                    src="/a_100421840_m_601_en_m1_1013_638.jpg"
                    width={200}
                    height={150}
                    quality={75}
                    style={{ objectFit: 'cover', borderRadius: '5px' }}
                    alt="photo"
                />
            </Stack>
            <Stack style={{ position: 'relative' }}>
                <Image
                    src="/a_100421840_m_601_en_m1_1013_638.jpg"
                    width={200}
                    height={150}
                    quality={75}
                    style={{ objectFit: 'cover', borderRadius: '5px' }}
                    alt="photo"
                />
            </Stack>
        </Stack>
    );
};
