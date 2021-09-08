import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import ChangePasswordForm from './ChangePasswordForm';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const LoginDialog = props => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={props.open} onClose={() => props.setChange(false)} 
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
        },
      }}
      classes={{ paper: 'br-none' }}
      maxWidth="lg"
      fullScreen={fullScreen}
    >
      <div className="header__auth">
        <div className="crossbox" onClick={() => props.setChange(false)}>
          <svg className="crossicon">
            <use xlinkHref={`${Sprite}#x`}></use>
          </svg>
        </div>

        <div className="header__auth--iconbox">
          <svg className="header__auth--icon">
            <use xlinkHref={`${Sprite}#key`}></use>
          </svg>
        </div>

        <ChangePasswordForm data={props.data} handleChange={props.handleChange} 
        handleSubmit={props.handleSubmit} />
      </div>
    </Dialog>
  );
}

export default LoginDialog;