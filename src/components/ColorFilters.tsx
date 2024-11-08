import React from 'react';
import { FormControlLabel, Grid2, Switch } from '@mui/material';

const colors = [
  "titanium_white",
  "phthalo_green",
  "phthalo_blue",
  "prussian_blue",
  "midnight_black",
  "dark_sienna",
  "burnt_umber",
  "van_dyke_brown",
  "alizarin_crimson",
  "sap_green",
  "cadmium_yellow",
  "yellow_ochre",
  "indian_yellow",
  "bright_red",
];

const toTitleCase = (str: string) => {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

interface ColorFiltersProps {
}

const ColorFilters: React.FC<ColorFiltersProps> = () => {
  return (
    <Grid2 container>
      {colors.map((color) => (
        <Grid2 size={3} key={color}>
            <FormControlLabel control={<Switch  />} label={toTitleCase(color)} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ColorFilters;
