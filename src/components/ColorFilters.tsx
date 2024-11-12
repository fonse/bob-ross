import React from 'react';
import { FormControlLabel, Grid2, Switch, Typography } from '@mui/material';
import { color, colors } from '../types';

const toTitleCase = (str: string) => {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

interface ColorFiltersProps {
  colorsEnabled: color[];
  setColorsEnabled: (colors: color[]) => void;
}

const ColorFilters: React.FC<ColorFiltersProps> = ({
  colorsEnabled,
  setColorsEnabled,
}) => {
  const handleChange = (color: color, value: boolean) => {
    if (value) {
      setColorsEnabled([...colorsEnabled, color]);
    } else {
      setColorsEnabled(colorsEnabled.filter(c => c !== color));
    }
  }

  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Typography variant="h5">Filter by colors</Typography>
      </Grid2>
      {colors.map((color) => (
        <Grid2 size={{ xs: 6, sm: 4, md: 3 }} key={color}>
            <FormControlLabel
              label={toTitleCase(color)}
              control={<Switch  />}
              checked={colorsEnabled.includes(color)}
              onChange={(e) => handleChange(color, (e.target as HTMLInputElement).checked)}
            />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ColorFilters;
