import { Grid, Box } from '@mui/material';

export const GridLayout = ({ sections }) => {
  return (
    <Grid container spacing={2}>
      {sections.map((s, index) => (
        <>
          {/* text */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box>{s.left}</Box>
          </Grid>

          {/* photo */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box>{s.right}</Box>
          </Grid>
        </>
      ))}
    </Grid>
  );
}