import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import SearchFilm from '../SearchFilm/SearchFilm';
import s from './Navigation.module.css';
import gidonline from '../../images/gidonline.jpg';

const Navigation = () => {
  return (
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
                      color: '#5c5a5a ',
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
              to="/movies"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: '#5c5a5a',
                    }
                  : { color: '#464545' }
              }
            >
              Movies
            </NavLink>
          </li>
          <li style={{ color: 'white' }} className={s.navigation_item}>
            HHHHHHH
          </li>
          <li style={{ color: 'white' }} className={s.navigation_item}>
            wwwwwwwwww
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
