import React from 'react';
import { Grid2, Typography } from '@mui/material';
import { TernaryFilter } from '../types';
import TernaryFilterSwitch from './TernaryFilter';

interface SubjectFiltersProps {
  mountains: TernaryFilter;
  buildings: TernaryFilter;
  gesso: TernaryFilter;
  contactPaper: TernaryFilter;
  setMountains: (value: TernaryFilter) => void;
  setBuildings: (value: TernaryFilter) => void;
  setGesso: (value: TernaryFilter) => void;
  setContactPaper: (value: TernaryFilter) => void;
}

const SubjectFilters: React.FC<SubjectFiltersProps> = ({
  mountains,
  buildings,
  gesso,
  contactPaper,
  setMountains,
  setBuildings,
  setGesso,
  setContactPaper,
}) => {

  return (
    <Grid2 container>
      <Grid2 container size={{ xs: 12, sm: 6 }}>
        <Grid2 size={12}>
          <Typography variant="h5">Filter by subject</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TernaryFilterSwitch label="Mountains" value={mountains} setValue={setMountains} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TernaryFilterSwitch label="Buildings" value={buildings} setValue={setBuildings} />
        </Grid2>
      </Grid2>
      <Grid2 container size={{ xs: 12, sm: 6 }}>
        <Grid2 size={12}>
          <Typography variant="h5">Filter by materials</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TernaryFilterSwitch label="Gesso" value={gesso} setValue={setGesso} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TernaryFilterSwitch label="Contact Paper" value={contactPaper} setValue={setContactPaper} />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default SubjectFilters;
