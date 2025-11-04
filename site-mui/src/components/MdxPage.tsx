import { Stack, Typography } from '@mui/material';

const components = {
    h1: (props) => <Typography
        variant="h1"
        sx={{
            my: 2
        }}
        {...props}
    />,
    h2: (props) => <Typography variant="h2"
        {...props}
    />,
    h3: (props) => <Typography variant="h3" {...props} />,
    p: (props) => <Typography variant="body1"
    sx={{
        mb: 2
    }}
        {...props}
    />,
};

function MdxPage({ content: Content }) {
    return (
        <Stack flexGrow={1}>
            <Content components={components} />
        </Stack>
    );
}

export default MdxPage;