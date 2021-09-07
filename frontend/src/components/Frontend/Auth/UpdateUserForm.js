import React, { Fragment, useRef } from 'react';
import InputBox from '../../UI/InputBox';
import { FlexBreak } from '../../../helpers';

const UpdateUserForm = ({ data, handleFileChange, handleChange, handleSubmit }) => {

  const formRef = useRef(null);

  return (
    <Fragment>
      <form className="auth__form"
        ref={formRef}
        onSubmit={(e) => handleSubmit(e, formRef)} 
        encType="multipart/form-data"
      >
        {/* First Name */}
        <InputBox 
          parentClass="auth__form--box adjust right-margin" 
          label="First Name" 
          auth={true} 
          error={data.errors["first name"]} >
          <input className="auth__form--input" 
          type="text" name="first_name" placeholder="First Name"
          value={data.first_name} onChange={handleChange} />
        </InputBox>

        {/* Last Name */}
        <InputBox 
          parentClass="auth__form--box adjust" 
          label="Last Name" 
          auth={true} 
          error={data.errors["last name"]}>
          <input className="auth__form--input" 
          type="text" name="last_name" placeholder="Last Name"
          value={data.last_name} onChange={handleChange} />
        </InputBox>

        <FlexBreak auth={true} />

        {/* Email */}
        <InputBox 
          parentClass="auth__form--box full-width adjust" 
          label="Email" 
          auth={true} error={data.errors.email} >
          <input className="auth__form--input" 
          type="email" name="email" placeholder="Email"
          value={data.email} onChange={handleChange} />
        </InputBox>

        <FlexBreak auth={true} />

        {/* Country */}
        <InputBox 
          parentClass="auth__form--box adjust right-margin" 
          label="Country" 
          auth={true} error={data.errors.country} >
          <input className="auth__form--input" 
          type="text" name="country" placeholder="Country"
          value={data.country} onChange={handleChange} />
        </InputBox>

        {/* State */}
        <InputBox 
          parentClass="auth__form--box adjust right-margin" 
          label="State" 
          auth={true} error={data.errors.state} >
          <input className="auth__form--input" 
          type="text" name="state" placeholder="State"
          value={data.state} onChange={handleChange} />
        </InputBox>

        {/* City */}
        <InputBox 
          parentClass="auth__form--box adjust" 
          label="City" 
          auth={true} error={data.errors.city} >
          <input className="auth__form--input" 
          type="text" name="city" placeholder="City" 
          value={data.city} onChange={handleChange} />
        </InputBox>

        {/* Address */}
        <InputBox 
          parentClass="auth__form--box full-width" 
          label="Address" 
          auth={true} error={data.errors.address} >
          <textarea className="auth__form--input" rows="3"
          type="text" name="address" placeholder="Address" 
          value={data.address} onChange={handleChange}></textarea>
        </InputBox>

        <div className="auth__form--box" 
          style={{ marginBottom: 0, marginTop: '5rem', width: '100%' }}
        >
          <button className="auth__form--button" disabled={ data.disabled ? true : false }>
            Sign Up
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default UpdateUserForm;