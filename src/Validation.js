export const validatePersonalInfo = (data) => {
  let errors = {};
  if (!data.name) errors.name = 'Name is required';
  if (!data.email) errors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
  if (!data.phone) errors.phone = 'Phone number is required';
  else if (!/^\d{10}$/.test(data.phone)) errors.phone = 'Phone number must be 10 digits';
  return errors;
};

export const validateAddressInfo = (data) => {
  let errors = {};
  if (!data.address1) errors.address1 = 'Address Line 1 is required';
  if (!data.city) errors.city = 'City is required';
  if (!data.state) errors.state = 'State is required';
  if (!data.zip) errors.zip = 'Zip Code is required';
  else if (!/^\d{6}$/.test(data.zip)) errors.zip = 'Zip Code must be 6 digits';
  return errors;
};