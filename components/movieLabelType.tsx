import React from "react";
import {MovieType} from "@/types/movieType";

interface MovieLabelTypeInterface {
    movieType: MovieType;
}

const MovieLabelType: React.FC<MovieLabelTypeInterface> = ({movieType}) => {

    function switchLabelColor(): string {
        switch (movieType) {
            case MovieType.series:
                return "bg-error";
            case MovieType.episode:
                return "bg-success";
            default:
                return "bg-primary";
        }
    }

    return (
        <div className={switchLabelColor() + " w-min rounded-full px-2 text-white drop-shadow-lg"}>
            {movieType.charAt(0).toUpperCase() + movieType.slice(1)}
        </div>
    );
};

export default MovieLabelType;