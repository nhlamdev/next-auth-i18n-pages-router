import { Pagination, Stack } from '@mui/material';
import { ReplyCommentItemComponent } from './child';
import { CommentInputBox } from './box';

export const ReplyCommentComponent = () => {
    return (
        <Stack sx={{ paddingLeft: '100px', gap: '10px' }}>
            <ReplyCommentItemComponent />
            <ReplyCommentItemComponent />
            <ReplyCommentItemComponent />

            <CommentInputBox />

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
