import React from 'react';
import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { TernaryFilter } from '../types';

interface TernaryFilterSwitchProps {
  label: string;
  value: TernaryFilter;
  setValue: (value: TernaryFilter) => void;
}

const TernaryFilterSwitch: React.FC<TernaryFilterSwitchProps> = ({
  label,
  value,
  setValue,
}) => {

  return (
    <Stack>
      <Typography>{label}</Typography>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(e, value) => setValue(value)}
        color={value === "on" ? "success" : value === "off" ? "error" : "standard"}
      >
        <ToggleButton value="on">Yes</ToggleButton>
        <ToggleButton value="indifferent">Indifferent</ToggleButton>
        <ToggleButton value="off">No</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default TernaryFilterSwitch;
