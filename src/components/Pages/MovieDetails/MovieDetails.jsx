import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { fetchInfoFilm } from '../../../services/movie-api';
import SideBar from '../../Sidebar/SideBar';
import RatingDetails from './RatingDetails/RatingDetails';
import Video from '../MovieDetails/Video/Video';
import WhichWatchFilm from './WhichWatchFilm/WhichWatchFilm';
import Comments from './Comments/Comments';
import imageDefault from '../../../images/default.jpg';
import s from './MovieDetails.module.css';
import { IMAGE } from '../../../services/movie-api';

const MovieDetails = () => {
  const [film, setFilm] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    return fetchInfoFilm(movieId).then(setFilm);
  }, [movieId]);

  return (
    <ul className={s.wrap}>
      {film && (
        <li key={film.id} className={s.item}>
          <div>
            <div className={s.wrapBlock}>
              <img
                src={
                  film.poster_path
                    ? `${IMAGE}${film.poster_path}`
                    : imageDefault
                }
                alt={film.tagline}
                width="350"
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
              <RatingDetails
                votes={film.vote_count}
                rating={film.vote_average}
              />
            </div>
            <Video originalTitle={film.original_title} title={film.title} />
            <WhichWatchFilm />
            <Comments />
          </div>
          <SideBar />
        </li>
      )}
    </ul>
  );
};

export default MovieDetails;
