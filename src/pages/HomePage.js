import Footer from "components/layout/Footer";
import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
    return (
        <Fragment>
            <section className="movies-layout page-container-fluid pb-20">
                <h2 className="text-white mb-10 text-3xl font-bold">
                    Now Playing
                </h2>
                <MovieList></MovieList>
            </section>
            <section className="movies-layout page-container-fluid pb-20">
                <h2 className="text-white mb-10 text-3xl font-bold">
                    Top Rated
                </h2>
                <MovieList type="top_rated"></MovieList>
            </section>
            <section className="movies-layout page-container-fluid pb-20">
                <h2 className="text-white mb-10 text-3xl font-bold">
                    Trending
                </h2>
                <MovieList type="popular"></MovieList>
            </section>
            <Footer></Footer>
        </Fragment>
    );
};

export default HomePage;
