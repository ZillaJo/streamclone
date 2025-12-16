const API_KEY = "d1a7ffa1";
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}&type=movie`
  );

  const data = await response.json();

  if (data.Response === "False") {
    return [];
  }

  return data.Search;
}

export async function getMovieDetails(imdbID) {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  );

  const data = await response.json();
  return data;
}

