import React from 'react';

import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.gitOnline}>
        GitOnline -
        <a href="#" className={s.linkGit}>
          your git to the world of cinema
        </a>
      </div>
      <ul className={s.wrap__contacts}>
        <li className={s.item}>
          <a href="#" className={s.itemLink}>
            User
          </a>
        </li>
        <li className={s.item}>
          <a href="#" className={s.itemLink}>
            Ownership
          </a>
        </li>
        <li className={s.item}>
          <a href="#" className={s.itemLink}>
            Contacts
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
