import axios from 'axios';

const KEY = 'e0c8052fe3055552a557e8dc1aa1681a';
const BASE_URL = 'https://api.themoviedb.org/3/';

export function getFilmsData() {
  return axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

export function getFilmByName(filmName) {
  return axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${filmName}&page=1&include_adult=false`,
  );
}

export function getFilmById(filmId) {
  return axios.get(`${BASE_URL}movie/${filmId}?api_key=${KEY}&language=en-US`);
}

export function getFilmCredits(filmId) {
  return axios.get(
    `${BASE_URL}movie/${filmId}/credits?api_key=${KEY}&language=en-US`,
  );
}

export function getFilmReviews(filmId) {
  return axios.get(
    `${BASE_URL}movie/${filmId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
}
