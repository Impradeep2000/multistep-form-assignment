import React from 'react';
import { TextField, Box, Button } from '@mui/material';

const AddressInfo = ({ data, handleChange, handleNext, handleBack, errors }) => {
  const handleZipChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      handleChange(e);
    }
  };

  return (
    <Box>
      <TextField
        label="Address Line 1"
        name="address1"
        value={data.address1}
        onChange={handleChange}
        error={!!errors.address1}
        helperText={errors.address1}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address Line 2"
        name="address2"
        value={data.address2}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        name="city"
        value={data.city}
        onChange={handleChange}
        error={!!errors.city}
        helperText={errors.city}
        fullWidth
        margin="normal"
      />
      <TextField
        label="State"
        name="state"
        value={data.state}
        onChange={handleChange}
        error={!!errors.state}
        helperText={errors.state}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Zip Code"
        name="zip"
        value={data.zip}
        onChange={handleZipChange}
        error={!!errors.zip}
        helperText={errors.zip}
        fullWidth
        margin="normal"
      />
      <Button style={{marginRight:"2rem"}} variant="contained" onClick={handleBack}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </Box>
  );
};

export default AddressInfo;
