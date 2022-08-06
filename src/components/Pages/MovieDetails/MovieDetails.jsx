import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { fetchInfoFilm } from '../../../services/movie-api';
import s from './MovieDetails.module.css';

const IMAGE = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const [film, setFilm] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    return fetchInfoFilm(movieId).then(setFilm);
  }, [movieId]);

  return (
    <ul className={s.wrap}>
      {film && (
        <li key={film.id}>
          <div className={s.wrapBlock}>
            <img
              src={`${IMAGE}${film.poster_path}`}
              alt={film.tagline}
              width="400"
              height="560"
            />
            <div className={s.blockRi}>
              <div className={s.blockRiLef}>
                <p className={s.blockInfo}>Film</p>
                <p className={s.blockInfoLeft}>Year</p>
                <p className={s.blockInfo}>Country</p>
                <p className={s.blockInfoLeft}>Genres</p>
                <p className={s.blockInfo}>Runtime</p>
                <p className={s.blockInfoLeft}>Status</p>
                <p className={s.blockInfo}>Vote_average</p>
              </div>
              <div>
                <h3 className={s.title}>{film.title}</h3>
                <p className={s.info}> {film.release_date}</p>
                <p className={s.title}>
                  {film.production_countries
                    .map(country => country.name)
                    .join(', ')}
                </p>
                <p className={s.info}>
                  {film.genres.map(genre => genre.name).join(', ')}
                </p>
                <p className={s.title}>{film.runtime} min</p>
                <p className={s.info}>{film.status}</p>
                <p className={s.title}>{film.vote_average}</p>
              </div>
            </div>
          </div>
          <div className={s.overviewWrap}>
            <p className={s.overview}>
              <span className={s.span}>About film</span>
              <br />
              {film.overview}
            </p>
            <div className={s.wrapCastReviews}>
              <div>
                <Link to={`/movies/${movieId}/cast`} className={s.cast}>
                  Cast
                </Link>
              </div>
              <div>
                <Link to={`/movies/${movieId}/reviews`} className={s.reviews}>
                  Reviews
                </Link>
              </div>
            </div>
          </div>
        </li>
      )}
    </ul>
  );
};

export default MovieDetails;
// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';

// import { fetchInfoFilm } from '../../../services/movie-api';
// import s from './MovieDetails.module.css';

// const IMAGE = 'https://image.tmdb.org/t/p/w500/';

// const MovieDetails = () => {
//   const [film, setFilm] = useState('');
//   const { movieId } = useParams();

//   useEffect(() => {
//     return fetchInfoFilm(movieId).then(setFilm);
//   }, [movieId]);

//   return (
//     <div>
//       <ul className={s.wrap__blocks}>
//         <li>
//           <img src={`${IMAGE}${film.backdrop_path}`} alt="aa" width="400" />
//         </li>
//         <li className={s.block__left_inf}>
//           <div className={s.wrap__left_inf}>
//             <div className={s.name}>Name</div>
//             <h2 className={s.title}>{film.original_title}</h2>
//           </div>
//           <div className={s.wrap__left_inf}>
//             <div className={s.name}>Year</div>
//             <p className={s.title}> {film.release_date}</p>
//           </div>
//           <div className={s.wrap__left_inf}>
//             <div className={s.name}>Country</div>{' '}
//             <p className={s.title}> {film.release_date}</p>
//           </div>
//           <div className={s.wrap__left_inf}>
//             <div className={s.name}>Time</div>
//             <p className={s.title}> {film.runtime} min</p>
//           </div>
//           <div className={s.wrap__left_inf}>
//             <div className={s.name}>Views</div>{' '}
//             <p className={s.title}> {film.vote_count}</p>
//           </div>
//         </li>
//         <li style={{ width: '300px' }}>dd</li>
//       </ul>
//       <div>
//         <ul>
//           <li>
//             <div>About Film</div>
//           </li>
//           <Link to={`/movies/${movieId}/cast`}>Cast</Link>
//           <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
//         </ul>

//         <p>{film.overview}</p>
//       </div>
//       <div>{film.vote_average}</div>
//     </div>
//   );
// };

// export default MovieDetails;
