import {Movie} from "@/types/movie";
import {MovieResponse} from "@/types/movieResponse";
import {MovieError} from "@/types/movieError";

export interface MovieSearchResponse {
    Search: Movie[];
    Response: MovieResponse;
    totalResults?: number;
    Error?: MovieError;
}