import React from 'react';
import { Grid, Paper } from '@mui/material';

const ExemploGrid = () => {
  return (
    <Grid container spacing={2}>
      {/* xs = Extra Small (para todos os tamanhos de tela) */}
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Paper>Item 1</Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Paper>Item 2</Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Paper>Item 3</Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Paper>Item 4</Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Paper>Item 5</Paper>
      </Grid>
    </Grid>
  );
}

export default ExemploGrid;