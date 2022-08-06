import React from 'react';

import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.gitOnline}>
        GitOnline - <a href="#">your git to the world of cinema </a>
      </div>
      <ul className={s.wrap__contacts}>
        <li>
          <a href="#">User</a>
        </li>
        <li>
          <a href="#">Ownership</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
