import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, styled } from '@mui/material';
import { Painting } from './types';

export interface PaintingCardProps {
  painting: Painting;
}

const CardContentNoPadding = styled(CardContent)('padding-bottom: 0;');

const PaintingCard: React.FC<PaintingCardProps> = ({painting: { index, title, season, episode, youtubeUrl }}) => {
  const imageUrl = `https://www.twoinchbrush.com/images/painting${index}.webp`;
  const detailsUrl = `https://www.twoinchbrush.com/painting/${index}`;

  return (
    <Card>
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContentNoPadding>
        <Typography variant="subtitle2">{`S${season}E${episode}`}</Typography>
        <Typography variant="h6">{title}</Typography>
      </CardContentNoPadding>
      <CardActions>
        <Button href={youtubeUrl} size="small">YouTube</Button>
        <Button href={detailsUrl} size="small">Details</Button>
      </CardActions>
    </Card>
  );
};

export default PaintingCard;
