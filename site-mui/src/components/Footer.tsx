import { Divider, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';

export const Footer: React.FC = () => {
    return (
        <Stack sx={{
            alignItems: "center",
            py: 3
        }}
        >
            <Divider sx={{ width: '100%' }} />
            <IconButton
                disableRipple
                component="a"
                href="https://www.facebook.com/people/The-Celiac-Shack-Gluten-Free-Desserts/61582682039160/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon fontSize="large" />
            </IconButton>

            <Typography variant="subtitle2" sx={{ color: 'grey' }}>
                © 2025 The Celiac Shack — All rights reserved
            </Typography>
        </Stack>
    );
};