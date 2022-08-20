import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

import SearchFilm from './SearchFilm/SearchFilm';
import Menus from './Menu/Menu';
import gidonline from '../../images/gidonline.jpg';
import s from './Navigation.module.css';

const Navigation = () => {
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
              <NavLink className={s.navLink} to="/">
                Home
              </NavLink>
            </li>
            <li className={s.navigation_item}>
              <NavLink className={s.navLink} to="/">
                Hit
              </NavLink>
            </li>
            <li className={s.navigation_item}>
              <NavLink className={s.navLink} to="/">
                Top
              </NavLink>
            </li>
          </ul>
        </div>
        <Menus />
      </header>
    </div>
  );
};

export default Navigation;
