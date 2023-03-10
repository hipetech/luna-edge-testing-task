import React from "react";
import MovieItems from "@/components/movieItems";
import FavouriteDialog from "@/components/favouriteDialog";
import Head from "next/head";


const Home = () => {
    return (
        <>
            <Head>
                <title>Search movies</title>
                <link
                    rel="canonical"
                    href={"https://luna-edge-testing-task.vercel.app"}
                    key="canonical"
                />
                <meta name="google" content="notranslate" />
                <meta name="description" content="Discover your next favorite movie with our comprehensive search engine. Find detailed information and ratings on the latest films, actors, and directors. Start exploring now!"/>
            </Head>
            <MovieItems/>
            <FavouriteDialog/>
        </>
    );
};

export default Home;
