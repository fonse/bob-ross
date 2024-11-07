import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

type color = "alizarin_crimson" | "bright_red" | "cadmium_yellow" | "phthalo_green" | "prussian_blue" | "sap_green" | "titanium_white" |
             "van_dyke_brown" | "burnt_umber" | "indian_yellow" | "phthalo_blue" | "yellow_ochre" | "midnight_black" | "dark_sienna";

const hexMapping : Record<color, string> = {
  "alizarin_crimson": "#4E1500",
  "bright_red": "#DB0000",
  "cadmium_yellow": "#FFEC00",
  "phthalo_green": "#102E3C",
  "prussian_blue": "#021E44",
  "sap_green": "#0A3410",
  "titanium_white": "#FFFFFF",
  "van_dyke_brown": "#221B15",
  "burnt_umber": "#8A3324",
  "indian_yellow": "#FFB800",
  "phthalo_blue": "#0C0040",
  "yellow_ochre": "#C79B00",
  "midnight_black": "#000000",
  "dark_sienna": "#5F2E1F"
}

export interface PaintingCardProps {
  index: number;
  title: string;
  season: number;
  episode: number;
  colors: color[];
  contactPaper: boolean;
  gesso: boolean;
}

const PaintingCard: React.FC<PaintingCardProps> = ({ index, title, season, episode }) => {
  const image = `https://www.twoinchbrush.com/images/painting${index}.webp`

  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="subtitle2">{`S${season}E${episode}`}</Typography>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default PaintingCard;
