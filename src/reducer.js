const intialState = {
  movies: [],
  moviesLoaded: false,
};

export default function (state = intialState, action) {
  const { type, data } = action;
  switch (type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: data,
        moviesLoaded: true,
      };
    default:
      return state;
  }
}
