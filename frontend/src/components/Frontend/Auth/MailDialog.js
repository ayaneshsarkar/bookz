import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const MailDialog = props => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={props.open} onClose={() => props.setClose(false)} 
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
        <div className="crossbox" onClick={() => props.setClose(false)}>
          <svg className="crossicon">
            <use xlinkHref={`${Sprite}#x`}></use>
          </svg>
        </div>

        <div className="header__auth--iconbox">
          <svg className="header__auth--icon">
            <use xlinkHref={`${Sprite}#check`}></use>
          </svg>
        </div>
        <div className="detail" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '2.5rem' }}>{ props.conf }</span>
        </div>
      </div>
    </Dialog>
  )
}

export default MailDialog;