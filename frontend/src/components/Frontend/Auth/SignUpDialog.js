import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import SignUpForm from './SignUpForm';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const SignUpDialog = props => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={props.open} onClose={() => props.setSignup(false)} 
    classes={{ paper: 'br-none' }}
    maxWidth="lg"
    fullScreen={fullScreen}
    >
      <div className="header__auth">
        <div className="crossbox" onClick={() => props.setSignup(false)}>
          <svg className="crossicon">
            <use xlinkHref={`${Sprite}#x`}></use>
          </svg>
        </div>

        <div className="header__auth--iconbox">
          <svg className="header__auth--icon">
            <use xlinkHref={`${Sprite}#user-plus`}></use>
          </svg>
        </div>

        <SignUpForm data={props.data} handleFileChange={props.handleFileChange} 
        handleChange={props.handleChange} handleSubmit={props.handleSubmit} />
      </div>
    </Dialog>
  )
}

export default SignUpDialog;