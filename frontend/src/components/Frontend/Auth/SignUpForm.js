import React, { Fragment, useRef } from 'react';
import InputBox from '../../UI/InputBox';
import { FlexBreak } from '../../../helpers';

const SignUpForm = ({ data, handleFileChange, handleChange, handleSubmit }) => {

  const avatar = useRef(null);
  const formRef = useRef(null);

  const fileClick = () => {
    avatar.current.click();
  }

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
          parentClass="auth__form--box adjust right-margin" 
          label="Email" 
          auth={true} error={data.errors.email} >
          <input className="auth__form--input" 
          type="email" name="email" placeholder="Email"
          value={data.email} onChange={handleChange} />
        </InputBox>

        {/* DOB */}
        <InputBox 
          parentClass="auth__form--box adjust" 
          label="Date Of Birth" 
          auth={true} error={data.errors["date of birth"]}>
          <input className="auth__form--date" 
          type="text" name="date_of_birth" placeholder="Date/Of/Birth" 
          onFocus={(e) => e.target.type = "date"} 
          value={data.date_of_birth} onChange={handleChange}/>
        </InputBox>

        <FlexBreak auth={true} />

        {/* Password */}
        <InputBox 
          parentClass="auth__form--box adjust right-margin" 
          label="Password" 
          auth={true} error={data.errors.password} >
          <input className="auth__form--input" 
          type="password" name="password" placeholder="Password" 
          value={data.password} onChange={handleChange}/>
        </InputBox>

        {/* Confirm Password */}
        <InputBox 
          parentClass="auth__form--box adjust" 
          label="Confirm Password" 
          auth={true} error={data.errors["confirm password"]} >
          <input className="auth__form--input" 
          type="password" name="confirmPassword" placeholder="Confirm Password" 
          value={data.confirmPassword} onChange={handleChange}/>
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

        {/* Avatar */}
        <InputBox parentClass="auth__form--box full-width file"
          error={data.errors.avatar}
          errorClass="fileError"
        >
          <input 
            className="auth__form--input file"
            type="file" 
            name="avatar" 
            ref={avatar}
            onChange={handleFileChange} 
            hidden
          />

          <div className="auth__form--fileButton" onClick={fileClick}>Choose Avatar</div>

          <span 
          className=
          {`auth__form--fileText${data.avatar ? ' active' : '' }`}>
            { data.profileImage || 'No Image Chosen' }
          </span>
        </InputBox>

        {/* Address */}

        <div className="auth__form--box" style={{ marginBottom: 0, width: '100%' }}>
          <button className="auth__form--button">
            Sign Up
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default SignUpForm;