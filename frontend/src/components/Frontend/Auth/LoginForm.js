import React, { Fragment } from 'react';
import InputBox from '../../UI/InputBox';

const LoginForm = props => {

  return (
    <Fragment>
      <form className="auth__form"
        onSubmit={props.handleSubmit} 
      >
        {/* Email */}
        <InputBox 
          parentClass="auth__form--box full-width" 
          label="Email" 
          auth={true}
          error={props.data.errors.email} >
          <input className="auth__form--input" 
          type="email" name="email" placeholder="Email"
          value={props.data.email} onChange={props.handleChange} />
        </InputBox>

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

        <div className="auth__form--box" style={{ marginBottom: 0, width: '100%' }}>
          <button className="auth__form--button">
            Login
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default LoginForm;