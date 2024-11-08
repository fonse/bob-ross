import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import Gallery from './components/Gallery';
import ColorFilters from './components/ColorFilters';

const App: React.FC = () => {
  return (
    <Container style={{padding: '20px 0'}}>
      <Stack spacing={2}>
      <Stack>
        <Typography variant="h3" align="center">
          Bob Ross Paintings
        </Typography>
        <Typography>
          Use the following toggles to filter the paintings by color.
        </Typography>
      </Stack>
      <ColorFilters />
      <Gallery />
      </Stack>
    </Container>
  );
};

export default App;