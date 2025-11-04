import { Box, Stack, Typography } from '@mui/material';

export const ImageWithCaption: React.FC = ({ src, caption, alt, sx = {} }) => {
  return (
    <Stack alignItems={"center"} my={3}>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          maxWidth: '100%',
          borderRadius: 3,
          ...sx
        }}
      />
      {caption && (
        <Typography variant="caption" display="block" align="center" color="text.secondary" mt={1} width={{ xs: "100%", md: "70%" }}>
          {caption}
        </Typography>
      )}
    </Stack>
  );
}