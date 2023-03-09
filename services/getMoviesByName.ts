import {MovieSearchResponse} from "@/types/movieSearchResponse";

export async function getMoviesByName(url: string): Promise<MovieSearchResponse> {
    return await fetch(url).then(res => res.json());
}