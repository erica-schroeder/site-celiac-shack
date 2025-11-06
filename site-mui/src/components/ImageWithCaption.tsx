import { Box, Stack, Typography } from '@mui/material';

export const ImageWithCaption: React.FC = ({ src, caption, alt, noMargin = false, sx = {} }) => {
  return (
    <Stack
      alignItems="center"
      sx={{
        my: noMargin ? 0 : 3
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
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