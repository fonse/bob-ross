import React from 'react';
import { Grid2 } from '@mui/material';
import PaintingCard, { PaintingCardProps } from './PaintingCard';
import paintingsData from './paintings.json';

const paintings = paintingsData as PaintingCardProps[];

const Gallery: React.FC = () => {
  return (
    <Grid2 container spacing={2}>
      {paintings.map((painting) => (
        <Grid2 size={3} key={painting.index}>
          <PaintingCard {...painting} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Gallery;
