import {MovieType} from "@/types/movieType";

export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: MovieType;
    Poster: string;
}