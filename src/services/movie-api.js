import axios from 'axios';

const API_KEY = '971b2ef273ae22e8f151e27d46ce7887';
const BASE_URL = `https://api.themoviedb.org`;
export const IMAGE = 'https://image.tmdb.org/t/p/w500/';

export function fetchTrending(currentPage) {
  return axios
    .get(
      `${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}&page=${currentPage}`,
    )
    .then(trends => trends)
    .catch(console.error('rrrrrrrrrrr-fetchTrending'));
}

export function FetchWhichWatchFilm() {
  return axios
    .get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=10`)
    .then(res => res.data.results)
    .catch(console.error('rrrrrrrrrrrr-FetchWhichWatchFilm'));
}

export function fetchTrendingWeek() {
  return axios
    .get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=1`)
    .then(trends => trends)
    .catch(console.error('rrrrrrrrrr-fetchTrendingWeek'));
}

export function fetchSidebarFilms() {
  return axios
    .get(`${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}&page=5`)
    .then(trends => trends.data.results)
    .catch(console.error('rrrrrrrrrrr-fetchSidebarFilms'));
}

export function fetchSidebarSerials() {
  return axios
    .get(`${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}&page=8`)
    .then(trends => trends.data.results)
    .catch(console.error('rrrrrrrrrrr-fetchSidebarSerials'));
}

export function fetchInfoFilm(movie_id) {
  return axios
    .get(`${BASE_URL}/3/movie/${movie_id}?api_key=${API_KEY}`)
    .then(film => film.data)
    .catch(console.error('rrrrrrrrr-fetchInfoFilm'));
}

export function fetchCast(movie_id) {
  return axios
    .get(
      `${BASE_URL}/3/movie/${movie_id}/credits?api_key=${API_KEY}&include_adult=false&language=en-US`,
    )
    .then(film => film.data.cast)
    .catch(console.error('rrrrrrrrr-fetchCast'));
}

export function fetchSearchFilm(searchMovie) {
  return axios
    .get(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&query=${searchMovie}`,
    )
    .then(res => res.data.results)
    .catch(console.error('rrrrrrrrrrrr-fetchSearchFilm'));
}
