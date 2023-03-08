import {Movie} from "@/types/movie";

interface MovieSearchResponse {
    Search: Movie[];
}

export async function getMoviesByName(url: string, name: string): Promise<Movie[]> {
    const data: MovieSearchResponse = await fetch(url + `s=${name}`).then(res => res.json());
    return data.Search;
}