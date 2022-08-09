import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import s from './RatingDetails.module.css';

const RatingDetails = ({ votes, rating }) => {
  const movieRating = rating.toFixed(1);
  return (
    <div className={s.wrap}>
      <Stack spacing={1}>
        <Rating
          className={s.rating}
          name="customized-10"
          defaultValue={movieRating}
          max={10}
          precision={0.5}
          readOnly
        />
      </Stack>
      <div className={s.wrapInfo}>
        <div className={s.movieRating}>Movie Rating: {movieRating}</div>
        <div className={s.totalVotes}>Total votes: {votes}</div>
      </div>
    </div>
  );
};

export default RatingDetails;
