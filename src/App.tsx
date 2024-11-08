import React, { useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import Gallery from './components/Gallery';
import ColorFilters from './components/ColorFilters';
import { colors, Painting } from './types';
import paintingsData from './data/paintings.json';

const paintings = paintingsData as Painting[];

const App: React.FC = () => {
  const [colorsEnabled, setColorsEnabled] = useState(colors);

  const filteredPaintings = paintings.filter(painting => painting.colors.every(color => colorsEnabled.includes(color)));

  return (
    <Container style={{padding: '20px 0'}}>
      <Stack spacing={2}>
      <Stack>
        <Typography variant="h3" align="center">
          Bob Ross Paintings
        </Typography>
        <Typography>
          Showing {filteredPaintings.length} paintings. Use the following toggles to filter by color.
        </Typography>
      </Stack>
      <ColorFilters colorsEnabled={colorsEnabled} setColorsEnabled={setColorsEnabled} />
      <Gallery paintings={filteredPaintings} />
      </Stack>
    </Container>
  );
};

export default App;