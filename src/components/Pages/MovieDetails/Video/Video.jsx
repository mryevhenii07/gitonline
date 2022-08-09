import React from 'react';

import s from './Video.module.css';

const Video = () => {
  return (
    <div className={s.container}>
      <div className={s.video}>
        <iframe
          width="874"
          height="505"
          src="https://www.youtube.com/embed/iDLS7Kj7L7I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
