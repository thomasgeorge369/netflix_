// Typically we would store in {process.env.API_KEY}
// const API_KEY = "a7850b5128e4dd82cb479decfae1dada";

const requests = {
  fetchTrending: `trending/all/day?api_key=a7850b5128e4dd82cb479decfae1dada`,
  fetchNetflixOriginals: `/discover/tv?api_key=a7850b5128e4dd82cb479decfae1dada`,
  fetchTopRated: `/movie/top_rated?api_key=a7850b5128e4dd82cb479decfae1dada&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=a7850b5128e4dd82cb479decfae1dada&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=a7850b5128e4dd82cb479decfae1dada&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=a7850b5128e4dd82cb479decfae1dada&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=a7850b5128e4dd82cb479decfae1dada&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=a7850b5128e4dd82cb479decfae1dada&with_genres=99`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=a7850b5128e4dd82cb479decfae1dada&language=en-US&page=1`,
};

export default requests;
