import {MovieRating} from "@/types/movieRating";
import {MovieType} from "@/types/movieType";
import {MovieResponse} from "@/types/movieResponse";

export interface MovieFullInfo {
    Title: string;
    Year: number;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: MovieRating[];
    Metascore: number;
    imdbRating: number;
    imdbVotes: string;
    imdbID: string;
    Type: MovieType;
    DVD: string;
    BoxOffice: string;
    Website: string;
    Response: MovieResponse

}