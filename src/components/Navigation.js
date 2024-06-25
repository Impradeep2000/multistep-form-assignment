import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

const Navigation = ({ step, setStep }) => {
  const handleChange = (event, newValue) => {
    setStep(newValue);
  };

  return (
    <Box>
      <Tabs value={step} onChange={handleChange} centered>
        <Tab label="Personal Information" disabled={step !== 0} />
        <Tab label="Address Information" disabled={step !== 1} />
        <Tab label="Confirmation" disabled={step !== 2} />
      </Tabs>
    </Box>
  );
};

export default Navigation;
