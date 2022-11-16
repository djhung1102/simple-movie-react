export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "7316d598ed080580adad536a5a893903";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
    getMovieList: (type, page = 1) =>
        `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
    getMovieDetails: (movieId) =>
        `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, type) =>
        `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
    getMovieSearch: (filterDebounce, nextPage) =>
        `${tmdbEndpointSearch}?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    item500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
