import React, { Fragment } from 'react';
import InputBox from '../../UI/InputBox';

const ChangePasswordForm = props => {

  return (
    <Fragment>
      <form className="auth__form"
        onSubmit={props.handleSubmit} 
      >
        {/* Password */}
        <InputBox 
          parentClass="auth__form--box full-width" 
          label="Password" 
          auth={true} 
          error={props.data.errors.password} >
          <input className="auth__form--input" 
          type="password" name="password" placeholder="Password" 
          value={props.data.password} onChange={props.handleChange} />
        </InputBox>

        {/* Confirm Password */}
        <InputBox 
          parentClass="auth__form--box full-width" 
          label="Confirm Password" 
          auth={true} 
          error={props.data.errors["confirm password"]} >
          <input className="auth__form--input" 
          type="password" name="confirmPassword" placeholder="Confirm Password" 
          value={props.data.confirmPassword} onChange={props.handleChange} />
        </InputBox>

        <div className="auth__form--box" style={{ marginBottom: 0, width: '100%' }}>
          <button className="auth__form--button" 
            
          >
            Change Password
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default ChangePasswordForm;