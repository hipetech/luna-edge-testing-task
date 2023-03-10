import React from "react";
import MovieItems from "@/components/movieItems";
import FavouriteDialog from "@/components/favouriteDialog";


const Home = () => {
    return (
        <>
            <MovieItems/>
            <FavouriteDialog/>
        </>
    );
};

export default Home;
