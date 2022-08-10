import axios from 'axios';
const API_KEY = '971b2ef273ae22e8f151e27d46ce7887';
const BASE_URL = `https://api.themoviedb.org`;

export function fetchTrending(currentPage) {
  return axios
    .get(
      `${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}&page=${currentPage}&total_pages=200`,
    )

    .then(trends => trends)
    .catch(console.error());
}
export function FetchWhichWatchFilm() {
  return axios
    .get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=10`)

    .then(res => res.data.results)
    .catch(console.error());
}

export function fetchTrendingWeek() {
  return axios
    .get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=1`)

    .then(trends => trends)
    .catch(console.error());
}
export function fetchSidebarFilms() {
  return axios
    .get(`${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}&page=4`)

    .then(trends => trends.data.results)
    .catch(console.error());
}
export function fetchSidebarSerials() {
  return axios
    .get(`${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}&page=6`)

    .then(trends => trends.data.results)
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

export function fetchSearchFilm(searchMovie) {
  return axios
    .get(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&query=${searchMovie}&page=1`,
    )
    .then(res => res.data.results);
}
