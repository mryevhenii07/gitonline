import React from 'react';

import s from './Genres.module.css';

const Genres = () => {
  return (
    <table>
      <tbody style={{ color: 'white' }}>
        <tr className={s.tr}>
          <td>WESTERN</td>
          <td>BIOGRAPHY</td>
          <td>ACTION</td>
          <td>MILITARY</td>
          <td>DETECTIVE</td>
          <td>DRAMA</td>
          <td>DOCUMENTARY</td>
        </tr>
        <tr className={s.tr}>
          <td>STORY</td>
          <td>COMEDY</td>
          <td>CRIME</td>
          <td>MELODRAMA</td>
          <td>MUSIC</td>
          <td>CARTOON</td>
          <td>ADVENTURE</td>
        </tr>
        <tr className={s.tr}>
          <td>FAMILY</td>
          <td>SERIES</td>
          <td>SPORT</td>
          <td>THRILLER</td>
          <td>HORROR</td>
          <td>FANTASY</td>
          <td>FICTION</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Genres;
