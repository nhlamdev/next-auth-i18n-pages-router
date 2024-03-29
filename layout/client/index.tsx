import { Stack } from '@mui/material';
import { ReactElement } from 'react';
import { NavigationClientComponent } from './navigation';

interface ClientLayoutComponentProps {
    children: ReactElement;
}

export const ClientLayoutComponent = (props: ClientLayoutComponentProps) => {
    const { children } = props;
    return (
        <Stack sx={{ width: '100%' }}>
            <NavigationClientComponent />
            {children}
        </Stack>
    );
};
