import { BsTrashFill } from 'react-icons/bs';
import { Stack } from '@mui/material';

interface TagsBoxItemComponentProps {
    value: { created_at: string; name: string; updated_at: string; _id: string };
    ondelete: () => void;
}

export const TagsBoxItemComponent = (props: TagsBoxItemComponentProps) => {
    const { value, ondelete } = props;
    return (
        <Stack
            sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: '10px 20px',
                cursor: 'pointer',
                scrollSnapAlign: 'start',
                transition: 'all ease 0.3s',
                margin: '5px',
                border: '1px solid #3f3b3b',
                borderRadius: '5px',
                '&:hover ': {
                    boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 3px 10px -2px,rgba(0, 0, 0, 0.3) 0px 2px 4px -4px',
                    border: '1px solid transparent',
                },
            }}
        >
            <span style={{ flex: 1 }}>{value.name}</span>{' '}
            <BsTrashFill color="#ff304f" onClick={() => ondelete()} />
        </Stack>
    );
};
