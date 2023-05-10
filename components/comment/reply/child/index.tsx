import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
export const ReplyCommentItemComponent = () => {
    return (
        <Stack
            direction="row"
            sx={{
                gap: '10px',
                alignItems: 'center',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                padding: '10px',
                borderRadius: '10px',
            }}
        >
            <Image
                src="/avatar.png"
                width={50}
                height={50}
                quality={75}
                style={{ objectFit: 'cover', borderRadius: 25 }}
                alt="photo"
            />
            <Stack sx={{ gap: '5px' }}>
                <Stack>
                    <Typography sx={{ fontSize: '13px', userSelect: 'none' }}>
                        Nguyễn Hoàng Lâm
                    </Typography>
                    <Typography sx={{ fontSize: '11px', fontStyle: 'italic' }}>
                        27/03/2023
                    </Typography>
                </Stack>

                <Stack>
                    <Typography sx={{ fontSize: '14px' }}>dasdasdasdasd</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};
