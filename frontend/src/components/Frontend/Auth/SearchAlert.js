import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import Sprite from '../../../assets/svg/feather-sprite.svg';
import InputBox from '../../UI/InputBox';
import history from '../../../config/history';

const SearchFormAlert = props => {
  const [search, setSearch] = useState('');

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (e) => {
    e.preventDefault();

    if(search) {
      history.push(`/search/${search}`);
      props.setSearch(false);
    }
  }

  return (
    <Dialog open={props.open} onClose={() => props.setSearch(false)} 
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
        <div className="crossbox" onClick={() => props.setSearch(false)}>
          <svg className="crossicon">
            <use xlinkHref={`${Sprite}#x`}></use>
          </svg>
        </div>

        <div className="header__auth--iconbox">
          <svg className="header__auth--icon">
            <use xlinkHref={`${Sprite}#search`}></use>
          </svg>
        </div>

        <form className="auth__form"
        onSubmit={handleSubmit} 
      >
        {/* Password */}
        <InputBox 
          parentClass="auth__form--box full-width" 
          label="Search" 
          auth={true}>
          <input className="auth__form--input" 
          type="text" name="search" placeholder="Search Here" 
          value={search} onChange={(e) => setSearch(e.target.value)} />
        </InputBox>

        <div className="auth__form--box" style={{ marginBottom: 0, width: '100%' }}>
          <button className="auth__form--button">
            Search
          </button>
        </div>
      </form>
      </div>
    </Dialog>
  );
}

export default SearchFormAlert;