import { IContent } from '@/interface';
import { FiEdit } from 'react-icons/fi';
import { IconButton, Stack, Typography } from '@mui/material';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import { useRouter } from 'next/router';

interface TableContentRowComponentProps {
    content: IContent;
    index: number;
}

export const TableContentRowComponent = (props: TableContentRowComponentProps) => {
    const { content, index } = props;
    const router = useRouter();
    return (
        <Stack sx={{ gap: '2px' }} direction="row">
            <Stack
                sx={{
                    width: '10%',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    backgroundColor: index % 2 === 0 ? '#B260FF80' : '#00B5B480',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    {index + 1}
                </Typography>
            </Stack>
            <Stack
                sx={{
                    width: '60%',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    backgroundColor: index % 2 === 0 ? '#B260FF80' : '#00B5B480',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    {content.title}
                </Typography>
            </Stack>
            <Stack
                sx={{
                    width: '10%',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    backgroundColor: index % 2 === 0 ? '#B260FF80' : '#00B5B480',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    40
                </Typography>
            </Stack>
            <Stack
                sx={{
                    width: '10%',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    backgroundColor: index % 2 === 0 ? '#B260FF80' : '#00B5B480',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    50
                </Typography>
            </Stack>
            <Stack
                sx={{
                    width: '10%',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    backgroundColor: index % 2 === 0 ? '#B260FF80' : '#00B5B480',
                }}
                alignItems="center"
                justifyContent="center"
                direction="row"
            >
                <IconButton size="small">
                    <FiEdit color="#F39C12" />
                </IconButton>
                <IconButton size="small">
                    <MdOutlineRemoveCircle color="#ff304f" />
                </IconButton>
            </Stack>
        </Stack>
    );
};
