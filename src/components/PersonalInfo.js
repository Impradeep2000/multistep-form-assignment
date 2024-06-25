import React from 'react';
import { TextField, Box, Button } from '@mui/material';

const PersonalInfo = ({ data, handleChange, handleNext, errors }) => {
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      handleChange(e);
    }
  };

  return (
    <Box>
      <TextField
        label="Name"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={data.phone}
        onChange={handlePhoneChange}
        error={!!errors.phone}
        helperText={errors.phone}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </Box>
  );
};

export default PersonalInfo;
