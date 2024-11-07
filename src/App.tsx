import React from 'react';
import { Container, Typography } from '@mui/material';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        All Paintings
      </Typography>
      <Typography variant="body1" align="center">
        Here you can see a list of all Paintings done by Bob Ross on the TV show 'The Joy of Painting'...
      </Typography>
      <Gallery />
    </Container>
  );
};

export default App;