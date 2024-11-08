import React from 'react';
import { FormControlLabel, Grid2, Switch } from '@mui/material';
import { color, colors } from '../types';

const toTitleCase = (str: string) => {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

interface ColorFiltersProps {
  colorsEnabled: color[];
  gesso: boolean;
  contactPaper: boolean;
  setColorsEnabled: (colors: color[]) => void;
  setGesso: (value: boolean) => void;
  setContactPaper: (value: boolean) => void;
}

const ColorFilters: React.FC<ColorFiltersProps> = ({
  colorsEnabled,
  gesso,
  contactPaper,
  setColorsEnabled,
  setGesso,
  setContactPaper,
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
      <Grid2 size={{ xs: 6, sm: 4, md: 3 }}>
        <FormControlLabel
          label="Gesso"
          control={<Switch  />}
          checked={gesso}
          onChange={(e) => setGesso((e.target as HTMLInputElement).checked)}
        />
      </Grid2>
      <Grid2 size={{ xs: 6, sm: 4, md: 3 }}>
        <FormControlLabel
          label="Contact Paper"
          control={<Switch  />}
          checked={contactPaper}
          onChange={(e) => setContactPaper((e.target as HTMLInputElement).checked)}
        />
      </Grid2>
    </Grid2>
  );
};

export default ColorFilters;
