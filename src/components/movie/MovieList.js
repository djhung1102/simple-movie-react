import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const MovieList = ({ type = "now_playing" }) => {
    // const [movies, setMovies] = useState([]);
    const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
    const isLoading = !data && !error;
    const movies = data?.results || [];
    // console.log("movies ~ ", movies);
    return (
        <div className="movie-list">
            {isLoading && (
                <>
                    <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                    </Swiper>
                </>
            )}
            {!isLoading && (
                <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
                    {movies.length > 0 &&
                        movies.map((item) => (
                            <SwiperSlide key={item.id}>
                                <MovieCard item={item}></MovieCard>
                            </SwiperSlide>
                        ))}
                </Swiper>
            )}
        </div>
    );
};

export default MovieList;
