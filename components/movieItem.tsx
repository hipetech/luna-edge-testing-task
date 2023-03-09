import React from "react";
import Link from "next/link";
import {Movie} from "@/types/movie";
import MovieLabelType from "@/components/movieLabelType";
import FavouriteCheckBoxMovieCheckbox from "@/components/favouriteCheckBoxMovieCheckbox";
import Poster from "@/components/poster";

interface MovieItemInterface {
    movie: Movie;
}

const MovieItem: React.FC<MovieItemInterface> = ({movie}) => {

    function validateTitleLength(): string {
        if (movie.Title.length > 40) return movie.Title.slice(0, 40) + "...";
        return movie.Title;
    }



    return (

        <div
            className={"w-[250px] flex flex-col bg-stone-100 rounded-[5px] relative hover:drop-shadow-lg duration-200"}>
            <Link href={`/${movie.imdbID}`}>
                <Poster poster={movie.Poster} width={"250px"} height={"350px"} />
                <div className={"mt-[10px] px-3 pb-3 text-[17px]"}>
                    <h4>
                        {validateTitleLength()}
                    </h4>
                    <h4>
                        {movie.Year}
                    </h4>
                    <h4>
                    </h4>
                </div>
                <div className={"absolute right-2 top-2"}>
                    <MovieLabelType movieType={movie.Type}/>
                </div>
            </Link>
            <div className={"absolute left-2 top-2"}>
                <FavouriteCheckBoxMovieCheckbox IMDbId={movie.imdbID}/>
            </div>
        </div>
    );
};

export default MovieItem;