import React from 'react';
import {
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaViber,
} from 'react-icons/fa';
import s from './Video.module.css';

const Video = ({ title, originalTitle }) => {
  return (
    <div className={s.container}>
      <div className={s.video}>
        <iframe
          width="100%"
          height="505"
          src="https://www.youtube.com/embed/iDLS7Kj7L7I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={s.wrapLink}>
        <div className={s.tellYourFriends}>Tell your friends</div>
        <ul className={s.wrapListLink}>
          <li className={`${s.telegram} ${s.item}`}>
            <a href="#" className={s.link}>
              <FaTelegramPlane />
            </a>
          </li>
          <li className={`${s.viber} ${s.item}`}>
            <a href="#" className={s.link}>
              {' '}
              <FaViber />
            </a>
          </li>
          <li className={`${s.linked} ${s.item}`}>
            <a href="#" className={s.link}>
              <FaLinkedinIn />
            </a>
          </li>
          <li className={`${s.twitter} ${s.item}`}>
            <a href="#" className={s.link}>
              {' '}
              <FaTwitter />
            </a>
          </li>

          <li className={`${s.face} ${s.item}`}>
            <a href="#" className={s.link}>
              {' '}
              <FaFacebookF />
            </a>
          </li>
          <li className={`${s.insta} ${s.item}`}>
            <a href="#" className={s.link}>
              <FaInstagram />
            </a>
          </li>
          <li className={`${s.tik} ${s.item}`}>
            <a href="#" className={s.link}>
              <FaTiktok />
            </a>
          </li>
        </ul>
      </div>{' '}
      <div className={s.wrapOriginalTitle}>
        <div className={s.wrapTitle}>
          <div>Title</div>
          <div>Origin Title</div>
        </div>
        <div className={s.wrapTitleText}>
          <div className={s.blockTitle}>{title}</div>
          <div className={s.blockTitle}>{originalTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Video;
