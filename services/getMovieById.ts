import {MovieFullInfo} from "@/types/movieFullInfo";

export async function getMovieById(url: string): Promise<MovieFullInfo> {
    return await fetch(url).then(res => res.json());
}