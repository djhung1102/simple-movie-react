import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import Button from "../button/Button";

const Banner = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=7316d598ed080580adad536a5a893903`,
        fetcher
    );
    const movies = data?.results || [];
    // console.log("movies ~ ", movies);
    return (
        <section className="banner h-[550px] page-container mb-20 overflow-hidden">
            <Swiper grabCursor="true" slidesPerView={"auto"}>
                {movies.length > 0 &&
                    movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BannerItem item={item}></BannerItem>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};

function BannerItem({ item }) {
    const { title, id, overview, backdrop_path } = item;
    const navigate = useNavigate();
    return (
        <div className="h-full w-full rounded-lg relative">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)] rounded-lg"></div>
            <img
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                alt=""
                className="w-full h-full rounded-lg"
            />
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl mb-5">{title}</h2>
                <div className="w-[700px] mb-3">
                    <span className="text-base text-gray-300">{overview}</span>
                </div>
                <Button
                    bgColor="secondary"
                    className="w-auto"
                    onClick={() => navigate(`/movies/${id}`)}
                >
                    Watch now
                </Button>
            </div>
        </div>
    );
}

export default Banner;
