import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsBoxArrowInRight } from 'react-icons/bs';

import SearchFilm from './SearchFilm/SearchFilm';
import s from './Navigation.module.css';
import gidonline from '../../images/gidonline.jpg';
import { removeUser } from '../../store/slices/userSlice';

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className={s.gidOnline}>Git Online</h1>
      <header className={s.header}>
        <div>
          <Link to="/">
            <img src={gidonline} alt="gid online" />
          </Link>
        </div>
        <div className={s.header__wrap_left_block}>
          <div>
            <SearchFilm />
          </div>

          <ul className={s.navigation}>
            <li className={s.navigation_item}>
              <NavLink
                className={s.navLink}
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: 'rgb(131, 129, 129)',
                      }
                    : { color: '#464545' }
                }
              >
                Home
              </NavLink>
            </li>
            <li className={s.navigation_item}>
              <NavLink
                className={s.navLink}
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: 'rgb(131, 129, 129)',
                      }
                    : { color: '#464545' }
                }
              >
                Hit
              </NavLink>
            </li>
            <li className={s.navigation_item}>
              <NavLink
                className={s.navLink}
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: 'rgb(131, 129, 129)',
                      }
                    : { color: '#464545' }
                }
              >
                Top
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={s.login}>
          <span className={s.logoutText}>LogOut</span>
          <BsBoxArrowInRight
            className={s.logout}
            onClick={() => dispatch(removeUser())}
          />
        </div>
      </header>
    </div>
  );
};

export default Navigation;
