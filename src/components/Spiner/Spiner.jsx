import React from 'react';
import { RingLoader } from 'react-spinners';

import s from './Spinner.module.css';
const Spiner = () => {
  return (
    <div className={s.spinner}>
      <RingLoader color="rgb(134, 198, 7)" size="90" />
    </div>
  );
};

export default Spiner;
