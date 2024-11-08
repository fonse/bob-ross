import React from 'react';
import { Grid2 } from '@mui/material';
import PaintingCard from './PaintingCard';
import { Painting } from '../types';

interface GalleryProps {
  paintings: Painting[];
}

const Gallery: React.FC<GalleryProps> = ({paintings}) => {
  return (
    <Grid2 container spacing={2}>
      {paintings.map((painting) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={painting.index}>
          <PaintingCard painting={painting} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Gallery;
