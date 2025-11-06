import { Grid, Stack, Typography } from "@mui/material";


export function MenuItemRow({ name, price }) {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            spacing={3}
            sx={{ px: 4 }}
        >
            <Typography sx={{ textAlign: 'left' }}><li>{name}</li></Typography>
            <Typography>{price}</Typography>
        </Stack>
    );
}

export function MenuSection({ title, children, image }) {
  return (
    <Grid container spacing={{xs: 4, sm: 9}} alignItems="flex-start" sx={{ mb: {xs: 10} }}>
      <Grid size={{ xs: 12, md: 6 }} display="flex">
        <Stack spacing={2} flexGrow={1}>
          <Typography variant="h2">{title}</Typography>
          {children}
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ my: {sm: 3} }}>
        {image}
      </Grid>
    </Grid>
  );
}