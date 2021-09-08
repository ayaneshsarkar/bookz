import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import UpdateUserForm from './UpdateUserForm';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const UpdateUserDialog = props => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={props.open} onClose={() => props.setEdit(false)} 
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
        <div className="crossbox" onClick={() => props.setEdit(false)}>
          <svg className="crossicon">
            <use xlinkHref={`${Sprite}#x`}></use>
          </svg>
        </div>

        <div className="header__auth--iconbox">
          <svg className="header__auth--icon">
            <use xlinkHref={`${Sprite}#edit-3`}></use>
          </svg>
        </div>

        <UpdateUserForm data={props.data} handleFileChange={props.handleFileChange} 
        handleChange={props.handleChange} handleSubmit={props.handleSubmit} />
      </div>
    </Dialog>
  )
}

export default UpdateUserDialog;