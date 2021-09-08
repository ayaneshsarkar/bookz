import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import InputBox from '../../UI/InputBox';

const ConfirmAddressDialog = props => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog 
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
        },
      }}
      open={props.open} 
      onClose={() => props.closeAddress(false)}
      classes={{ paper: 'br-none' }}
      maxWidth="lg"
      fullScreen={fullScreen}
    >
      <div className="header__auth">
        <form className="auth__form" onSubmit={props.handleSubmit}>
          <InputBox
            parentClass="auth__form--box full-width noMargin"
            label="Address"
            auth={true}
            error={props.data.errors.address}
            textarea={true}
          >
            <textarea name="address" rows="5" className="auth__form--input"
            placeholder="Address"
            value={props.data.address}
            onChange={props.handleChange}></textarea>
          </InputBox>

          <div className="auth__form--box noMargin">
            <button className="auth__form--button" style={{ marginTop: '19rem' }}>
              Save Address
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  )
}

export default ConfirmAddressDialog;