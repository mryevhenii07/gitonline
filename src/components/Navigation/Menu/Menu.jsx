import { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';

// import { BsBoxArrowInRight } from 'react-icons/bs';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import { auth } from '../../../firebase';
import { removeUser } from '../../../store/slices/userSlice';
import s from '../Navigation.module.css';
import img from '../../../images/default.jpg';

const Menus = () => {
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');

  //   const [profilePicture, setProfilePicture] = useState('');
  //   setProfilePicture(auth.currentUser.photoURL);
  console.log(auth);
  console.log('hhh');
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setNick(auth.currentUser.displayName);
    setEmail(auth.currentUser.email);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={s.login}>
      <div className={s.logoutText}>
        <div>
          <div className={s.wrapImg}>
            <Button
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <img src={img} alt="" className={s.profilePic} />
            </Button>
          </div>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              Nick: <span className={s.name}>{nick}</span>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              Email: <span className={s.name}>{email}</span>
            </MenuItem>
            <MenuItem
              onClick={() => dispatch(removeUser())}
              className={s.logout}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
      {/* <BsBoxArrowInRight className={s.logout} /> */}
    </div>
  );
};

export default Menus;
