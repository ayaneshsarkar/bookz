import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const UserDetailsDialog = props => {
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
            <use xlinkHref={`${Sprite}#user`}></use>
          </svg>
        </div>

        {props.user ? <div className="userDetails">
          <div className="detail">Name: <span>
              { props.user.first_name + ' ' + props.user.last_name }
            </span>
          </div>

          <div className="detail">E-Mail: <span>{ props.user.email }</span></div>
          <div className="detail">City: <span>{ props.user.city }</span></div>
          <div className="detail">State: <span>{ props.user.state }</span></div>
          <div className="detail">Country: <span>{ props.user.country }</span></div>
          <div className="detail address">Address: <span>{ props.user.address }</span></div>
        </div> : ''}
      </div>
    </Dialog>
  )
}

export default UserDetailsDialog;