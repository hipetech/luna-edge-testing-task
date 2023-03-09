import React, {ReactNode} from "react";
import Link from "next/link";
import {Movie} from "@/types/movie";
import Image from "next/image";
import MovieLabelType from "@/components/movieLabelType";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FavouriteCheckBoxMovieCheckbox from "@/components/favouriteCheckBoxMovieCheckbox";

interface MovieItemInterface {
    movie: Movie;
}

const MovieItem: React.FC<MovieItemInterface> = ({movie}) => {

    function validateTitleLength(): string {
        if (movie.Title.length > 40) return movie.Title.slice(0, 40) + "...";
        return movie.Title;
    }

    function validatePoster(): ReactNode {
        if (movie.Poster === "N/A") return (
            <div className={"flex flex-col justify-center items-center"}>
                <InsertPhotoIcon sx={{width: "100px", height: "100px"}} color={"error"}/>
                <h2 className={"text-[18px]"}>There is no poster</h2>
            </div>
        );
        return (
            <Image src={movie.Poster} alt={`${movie.Title} poster`} width={300} height={399}
                   className={"w-full h-full rounded-t-[5px]"}/>
        );
    }

    return (

        <div
            className={"w-[250px] flex flex-col bg-stone-100 rounded-[5px] relative hover:drop-shadow-lg duration-200"}>
            <Link href={`/${movie.imdbID}`}>
                <div className={"w-[250px] h-[350px] object-cover flex justify-center items-center"}>
                    {validatePoster()}
                </div>
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