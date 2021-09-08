import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const UnAuthAlert = props => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={props.open} onClose={() => props.setAuth(false)} 
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
        },
      }}
      classes={{ paper: 'br-none' }}
      maxWidth="lg"
      fullScreen={fullScreen}
    >
      <div className="header__auth" style={{ minWidth: '75vw', height: 'auto' }}>
        <div className="crossbox" onClick={() => props.setAuth(false)}>
          <svg className="crossicon">
            <use xlinkHref={`${Sprite}#x`}></use>
          </svg>
        </div>

        <div className="header__auth--iconbox">
          <svg className="header__auth--icon">
            <use xlinkHref={`${Sprite}#x-circle`}></use>
          </svg>
        </div>

        <div style={{ fontSize: '1.9rem', textAlign: 'center' }}>You're not Authorized visit this page. </div>
      </div>
    </Dialog>
  );
}

export default UnAuthAlert;