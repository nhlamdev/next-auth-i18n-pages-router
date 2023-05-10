import { Stack, TextField, Typography } from '@mui/material';

export const CommentInputBox = () => {
    return (
        <Stack sx={{ gap: '10px' }}>
            <TextField multiline rows={3} />
            <Stack
                sx={{
                    padding: '10px 20px',
                    backgroundColor: 'green',
                    borderRadius: '5px',
                    width: 'fit-content',
                    cursor: 'pointer',
                }}
            >
                <Typography sx={{ fontSize: '14px' }}>Gửi</Typography>
            </Stack>
        </Stack>
    );
};
