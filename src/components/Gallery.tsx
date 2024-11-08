import React from 'react';
import { Grid2 } from '@mui/material';
import PaintingCard from './PaintingCard';
import paintingsData from './paintings.json';
import { Painting } from './types';

const paintings = paintingsData as Painting[];

const Gallery: React.FC = () => {
  return (
    <Grid2 container spacing={2}>
      {paintings.map((painting) => (
        <Grid2 size={3} key={painting.index}>
          <PaintingCard painting={painting} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Gallery;
