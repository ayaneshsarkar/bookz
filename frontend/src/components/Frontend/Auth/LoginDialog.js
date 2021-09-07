import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import LoginForm from './LoginForm';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const LoginDialog = props => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={props.open} onClose={() => props.setLogin(false)} 
      classes={{ paper: 'br-none' }}
      maxWidth="lg"
      fullScreen={fullScreen}
    >
      <div className="header__auth">
        <div className="crossbox" onClick={() => props.setLogin(false)}>
          <svg className="crossicon">
            <use xlinkHref={`${Sprite}#x`}></use>
          </svg>
        </div>

        <div className="header__auth--iconbox">
          <svg className="header__auth--icon">
            <use xlinkHref={`${Sprite}#user-check`}></use>
          </svg>
        </div>

        <LoginForm data={props.data} handleChange={props.handleChange} 
        handleSubmit={props.handleSubmit} />
      </div>
    </Dialog>
  );
}

export default LoginDialog;