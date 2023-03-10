import React from "react";
import {MovieType} from "@/types/movieType";
import {Chip} from "@mui/material";

interface MovieLabelTypeInterface {
    movieType: MovieType;
}

const MovieLabelType: React.FC<MovieLabelTypeInterface> = ({movieType}) => {
    function switchLabelColor() {
        switch (movieType) {
            case MovieType.series:
                return "error";
            case MovieType.episode:
                return "success";
            default:
                return "primary";
        }
    }

    return (
        <Chip
            color={switchLabelColor()}
            label={movieType.charAt(0).toUpperCase() + movieType.slice(1)}
            sx={{
                fontSize: "15px"
            }}
        />
    );
};

export default MovieLabelType;