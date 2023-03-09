import React from "react";
import Link from "next/link";
import {Movie} from "@/types/movie";
import Image from "next/image";
import MovieLabelType from "@/components/movieLabelType";

interface MovieItemInterface {
    movie: Movie;
}

const MovieItem: React.FC<MovieItemInterface> = ({movie}) => {

    function validateTitleLength(): string {
        if (movie.Title.length > 40) return movie.Title.slice(0, 40) + "...";
        return movie.Title;
    }


    return (
        <Link href={`/${movie.imdbID}`}>
            <div className={"w-[250px] flex flex-col bg-stone-100 rounded-[5px] relative"}>
                <div className={"w-[250px] h-[350px] object-cover"}>
                    <Image src={movie.Poster} alt={`${movie.Title} poster`} width={300} height={399}
                           className={"w-full h-full rounded-t-[5px]"}/>
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
                    <MovieLabelType movieType={movie.Type} />
                </div>
            </div>
        </Link>
    );
};

export default MovieItem;