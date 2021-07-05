const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const randomMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&adult=false&page=5`;
const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&adult=false`;
const bestDramas = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2021`;
const liamNeeson = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&adult=false&certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896`;

export function getMovies(query) {
  let apiString = null;
  switch (query) {
    case 'trending':
      apiString = trending;
      break;
    case 'dramas':
      apiString = bestDramas;
      break;
    case 'liamNeeson':
      apiString = liamNeeson;
      break;
    default:
      apiString = randomMovies;
      break;
  }
  return async function (dispatch) {
    const res = await fetch(apiString);
    const movies = await res.json();
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results,
    });
  };
}
