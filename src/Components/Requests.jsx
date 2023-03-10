const key = 'b41dd7e41442a975e15bf877098d4438';

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-IN&page=1`,
  requestToprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-IN&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-IN&page=2`,
  // requestHorror: `https://api.themoviedb.org/3/movie?api_key=${key}&language=en-US&query=horror&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-IN&page=1`,
};

export default request;
