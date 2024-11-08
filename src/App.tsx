import React, { useMemo, useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import Gallery from './components/Gallery';
import ColorFilters from './components/ColorFilters';
import { colors, Painting } from './types';
import paintingsData from './data/paintings.json';

const paintings = paintingsData as Painting[];

const App: React.FC = () => {
  const [colorsEnabled, setColorsEnabled] = useState(colors);
  const [gesso, setGesso] = useState(false);
  const [contactPaper, setContactPaper] = useState(false);

  const filteredPaintings = useMemo(() => {
    return paintings.filter(painting => {
      return painting.colors.every(color => colorsEnabled.includes(color)) &&
             (!painting.gesso || gesso) &&
             (!painting.contactPaper || contactPaper);
    })
  }, [colorsEnabled, gesso, contactPaper]);

  return (
    <Container>
      <Stack spacing={2}>
      <Stack>
        <Typography variant="h3" align="center">
          Bob Ross Paintings
        </Typography>
        <Typography>
          Showing {filteredPaintings.length} paintings. Use the following toggles to filter by color and materials.
        </Typography>
      </Stack>
      <ColorFilters
        colorsEnabled={colorsEnabled}
        gesso={gesso}
        contactPaper={contactPaper}
        setColorsEnabled={setColorsEnabled}
        setGesso={setGesso}
        setContactPaper={setContactPaper}
      />
      <Gallery paintings={filteredPaintings} />
      </Stack>
    </Container>
  );
};

export default App;