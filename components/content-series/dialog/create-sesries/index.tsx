import ApiCaller from '@/api';
import { Button, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';

interface SeriesItem {
    contents: any[];
    created_at: string;
    summary: string;
    title: string;
    updated_at: string;
    _id: string;
}
interface CreateSeiresDialogProps {
    addSeries: (series: SeriesItem) => void;
}

export const CreateSeiresDialog = (props: CreateSeiresDialogProps) => {
    const [title, setTitle] = useState<string>('');
    const [summary, setSummary] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);

    const { addSeries } = props;
    return (
        <>
            {!open && (
                <Tooltip title="Tạo mới" placement="left">
                    <Stack
                        sx={{
                            position: 'fixed',
                            right: '20px',
                            bottom: '40px',
                            borderRadius: '50%',
                        }}
                        alignItems="center"
                    >
                        <IoIosCreate
                            onClick={() => setOpen(true)}
                            style={{
                                fontSize: '40px',
                                cursor: 'pointer',
                            }}
                        />
                    </Stack>
                </Tooltip>
            )}
            {open && (
                <Stack
                    sx={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',

                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2,
                    }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack
                        sx={{
                            zIndex: 3,
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            backgroundColor: '#B8A99A90',
                        }}
                    />
                    <Stack
                        sx={{
                            zIndex: 4,
                            gap: '10px',
                            width: '50%',
                            height: '50%',
                            borderRadius: '5px',
                            backgroundColor: 'white',
                            padding: '20px',
                            justifyContent: 'space-between',
                            position: 'relative',
                        }}
                        alignItems="center"
                    >
                        <Stack>
                            <Typography sx={{ fontSize: '20px' }}>Tạo Mới Series</Typography>
                            <AiFillCloseCircle
                                onClick={() => {
                                    setOpen(false);
                                    setTitle('');
                                    setSummary('');
                                }}
                                style={{
                                    fontSize: '24px',
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    cursor: 'pointer',
                                    color: '#C25452',
                                }}
                            />
                        </Stack>

                        <Stack sx={{ width: '100%', gap: '10px' }}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="Tiêu đề"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                multiline
                                rows={3}
                                fullWidth
                                placeholder="Mô tả"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                            />
                        </Stack>

                        <Button
                            onClick={() => {
                                if (title && summary) {
                                    ApiCaller.content.createSeries(title, summary).then((res) => {
                                        addSeries(res.data);
                                        setTitle('');
                                        setSummary('');
                                        setOpen(false);
                                    });
                                }
                            }}
                            sx={{ width: '40%' }}
                            variant="outlined"
                        >
                            Tạo mới
                        </Button>
                    </Stack>
                </Stack>
            )}
        </>
    );
};
