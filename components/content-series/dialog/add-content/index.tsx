import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

export const AddContentToSeriesDialog = () => {
    return (
        <Stack
            sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}
            alignItems="center"
            justifyContent="center"
        >
            <Stack
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#00000060',
                    zIndex: 3,
                }}
            ></Stack>
            <Stack
                sx={{
                    zIndex: 4,
                    width: '600px',
                    height: '600px',
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    padding: '10px',
                }}
            >
                <Stack direction="row">
                    <Typography>Bài đăng</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};
