import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import s from './Rating.module.css';

const Ratings = ({ star }) => {
  const rating = star.toFixed(1) - 3;
  console.log(rating);

  return (
    <Stack spacing={1}>
      <Rating
        className={s.rating}
        name="customized-10"
        defaultValue={rating}
        max={7}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
};
export default Ratings;
