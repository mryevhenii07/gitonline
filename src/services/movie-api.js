import axios from 'axios';
const API_KEY = '971b2ef273ae22e8f151e27d46ce7887';
const BASE_URL = `https://api.themoviedb.org`;

export function fetchTrending() {
  return axios
    .get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`)

    .then(trends => trends)
    .catch(console.error());
}

export function fetchInfoFilm(movie_id) {
  return axios
    .get(`${BASE_URL}/3/movie/${movie_id}?api_key=${API_KEY}`)
    .then(film => film.data);
}

export function fetchCast(movie_id) {
  //   console.log(movieId);
  return axios
    .get(
      `${BASE_URL}/3/movie/${movie_id}/credits?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`,
    )
    .then(film => film.data.cast);
}
