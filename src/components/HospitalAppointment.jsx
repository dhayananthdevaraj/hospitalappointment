import React from 'react';
import Form from './Form';
import HomeBackground from "../assests/hospital.jpg";

const HospitalAppointment = () => {
  return (
    <div className="hospital-appointment">
      <div className="left-side">
        <img
          src={ HomeBackground }
          alt="Hospital"
          className="hospital-image"
        />
      </div>
      <div className="right-side">
        <Form />
      </div>
    </div>
  );
};

export default HospitalAppointment;
