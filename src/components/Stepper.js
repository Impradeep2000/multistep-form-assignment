import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';
import Navigation from './Navigation';
import useLocalStorage from '../UseLocalStorage';
import { validatePersonalInfo, validateAddressInfo } from '../Validation';

const Stepper = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useLocalStorage('formData', {
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    let currentErrors = {};
    if (step === 0) {
      currentErrors = validatePersonalInfo(data);
    } else if (step === 1) {
      currentErrors = validateAddressInfo(data);
    }

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
    } else {
      setErrors({});
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    setData({
      name: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
    });
    setStep(0);
  };

  return (
    <div>
      <Navigation step={step} setStep={setStep} />
      {step === 0 && <PersonalInfo data={data} handleChange={handleChange} handleNext={handleNext} errors={errors} />}
      {step === 1 && (
        <AddressInfo
          data={data}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
          errors={errors}
        />
      )}
      {step === 2 && (
        <Confirmation data={data} handleBack={handleBack} handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Stepper;
