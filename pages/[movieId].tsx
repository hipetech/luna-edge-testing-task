import React from "react";
import {GetServerSideProps, GetServerSidePropsContext, NextPage} from "next";
import {getMovieById} from "@/services/getMovieById";
import {MovieFullInfo} from "@/types/movieFullInfo";
import MovieInfo from "@/components/movieInfo";

interface MoviePageInterface {
    movie: MovieFullInfo;
}

export const getServerSideProps: GetServerSideProps<MoviePageInterface> = async (context: GetServerSidePropsContext) => {
    const {movieId} = context.query;

    const data = await getMovieById(process.env.NEXT_PUBLIC_HREF + `&i=${movieId}&plot=full`);

    return {
        props: {
            movie: data
        }
    };
};


const MoviePage: NextPage<MoviePageInterface> = ({movie}) => {
    return (
        <MovieInfo movie={movie} />
    );
};

export default MoviePage;