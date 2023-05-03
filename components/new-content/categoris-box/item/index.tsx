import { BsTrashFill } from 'react-icons/bs';
import { Stack } from '@mui/material';

interface TagsBoxItemComponentProps {
    item: {
        contents: any[];
        created_at: string;
        summary: string;
        title: string;
        updated_at: string;
        _id: string;
    };
    value: string;
    change: (v: string) => void;
    ondelete: () => void;
}

export const TagsBoxItemComponent = (props: TagsBoxItemComponentProps) => {
    const { value, ondelete, change, item } = props;
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
                border: value === item._id ? '1px solid #3f3b3b' : '1px solid #3fc',
                borderRadius: '5px',
                '&:hover ': {
                    boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 3px 10px -2px,rgba(0, 0, 0, 0.3) 0px 2px 4px -4px',
                    border: '1px solid transparent',
                },
            }}
            onClick={() => change(item._id)}
        >
            <span style={{ flex: 1 }}>{item.title}</span>
            <BsTrashFill color="#ff304f" onClick={() => ondelete()} />
        </Stack>
    );
};
