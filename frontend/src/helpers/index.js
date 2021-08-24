import React from 'react';

export const inArray = (needle, hayStack) => {
  const length  = hayStack.length;

  for (let i = 0; i < length; i++) {
    if(hayStack[i] === needle) return true;
  }

  return false;
};

export const capitalize = string => {
  const arr = string.split('');
  const capitalizedFirstLetter = arr[0].toUpperCase();
  const remainingString = string.slice(1);
  return capitalizedFirstLetter + remainingString;
}

export const localizeInt = (int, currencyCode = 'INR') => {
  const number = new Intl.NumberFormat('en-IN', { style: 'currency', currency: currencyCode })
              .format(int);
  return number;
}

export const FlexBreak = props => {
  return (
    <div className={`${props.auth ? 'auth__form' : 'admin__form'}--box full-width`} 
    style={{ margin: 0 }}>
      <input className={`${props.auth ? 'auth__form' : 'admin__form'}--input`} 
      style={{ height: 0, padding: 0, border: 'none', margin: 0  }} />
    </div>
  );
}

export const manipulateFirstLetter = (string, letterValue) => {
  const arr = string.split('');
  const firstLetter = arr[0];
  const remainingString = string.slice(1);
  return firstLetter + letterValue + remainingString;
}

export const removeDecimals = value => value.toString().replace(/\D00$/, '');