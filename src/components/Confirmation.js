import React from 'react';
import { Box, Button } from '@mui/material';

const Confirmation = ({ data, handleBack, handleSubmit }) => {
  return (
    <Box>
      <h3>Confirm Your Details</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Address Line 1: {data.address1}</p>
      <p>Address Line 2: {data.address2}</p>
      <p>City: {data.city}</p>
      <p>State: {data.state}</p>
      <p>Zip Code: {data.zip}</p>
      <Button style={{marginRight:"2rem"}} variant="contained" onClick={handleBack}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default Confirmation;
