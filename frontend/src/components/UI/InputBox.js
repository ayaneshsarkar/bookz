import React from 'react';

const InputBox = props => {
  return (
    <>
      <div className={ `${props.parentClass}` }>
        { props.error && 
          <p 
            className={`${props.auth ? 'auth__form' : 'admin__form'}--error 
            ${ props.errorClass || '' }  ${props.textarea && 'textarea'}` }>
            {props.error}
          </p>
        }

        { props.children }

        { props.label &&  
          <label htmlFor={props.for || ''} 
          className={`${props.auth ? 'auth__form' : 'admin__form'}--label`}>
            { props.label || '' }
          </label>
        }
      </div>
    </>
  );
}

export default InputBox;