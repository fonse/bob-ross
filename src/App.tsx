import React, { useMemo, useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import Gallery from './components/Gallery';
import ColorFilters from './components/ColorFilters';
import { colors, Painting, TernaryFilter } from './types';
import paintingsData from './data/paintings.json';
import SubjectFilters from './components/SubjectFilters';

const paintings = paintingsData as Painting[];

const App: React.FC = () => {
  const [colorsEnabled, setColorsEnabled] = useState(colors);
  const [mountains, setMountains] = useState<TernaryFilter>("indifferent");
  const [buildings, setBuildings] = useState<TernaryFilter>("indifferent");
  const [underpainting, setUnderpainting] = useState<TernaryFilter>("off");
  const [contactPaper, setContactPaper] = useState<TernaryFilter>("off");

  const filteredPaintings = useMemo(() => {
    return paintings.filter(painting => {
      return painting.colors.every(color => colorsEnabled.includes(color)) &&
             (
              (painting.underpainting && underpainting !== "off") ||
              (!painting.underpainting && underpainting !== "on")
             ) &&
             (
              (painting.mountains && mountains !== "off") ||
              (!painting.mountains && mountains !== "on")
             ) &&
             (
              (painting.contactPaper && contactPaper !== "off") ||
              (!painting.contactPaper && contactPaper !== "on")
             ) &&
             (
              (painting.buildings && buildings !== "off") ||
              (!painting.buildings && buildings !== "on")
             );
    })
  }, [colorsEnabled, underpainting, contactPaper, mountains, buildings]);

  return (
    <Container>
      <Stack spacing={2}>
        <Stack>
          <Typography variant="h3" align="center">
            Bob Ross Paintings
          </Typography>
          <Typography>
            Showing {filteredPaintings.length} paintings. Use the toggles below to filter by color, materials and subject.
          </Typography>
        </Stack>

        <ColorFilters
          colorsEnabled={colorsEnabled}
          setColorsEnabled={setColorsEnabled}
        />
        <SubjectFilters
          mountains={mountains}
          buildings={buildings}
          setMountains={setMountains}
          setBuildings={setBuildings}
          underpainting={underpainting}
          contactPaper={contactPaper}
          setUnderpainting={setUnderpainting}
          setContactPaper={setContactPaper}
        />
        
        <Gallery paintings={filteredPaintings} />
      </Stack>
    </Container>
  );
};

export default App;