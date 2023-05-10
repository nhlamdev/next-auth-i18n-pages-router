import { Pagination, Stack, Typography } from '@mui/material';
import { CommentChildComponent } from './child';
import { CommentInputBox } from './box';
export const ClientCommentComponent = () => {
    return (
        <Stack sx={{ width: '100%', padding: '10px 20px', gap: '20px' }}>
            <Stack sx={{ width: '100%' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>Bình luận</Typography>
            </Stack>

            <CommentInputBox />

            <Stack sx={{ gap: '10px' }}>
                <CommentChildComponent />
                <CommentChildComponent />
            </Stack>
            <Stack sx={{ width: '100%' }} alignItems="center">
                <Pagination
                    onChange={(e, page) => {}}
                    count={20}
                    defaultPage={8}
                    siblingCount={1}
                    variant="outlined"
                />
            </Stack>
        </Stack>
    );
};
