import React from "react";
import {GetServerSideProps, GetServerSidePropsContext, NextPage} from "next";
import {getMovieById} from "@/services/getMovieById";
import {MovieFullInfo} from "@/types/movieFullInfo";
import MovieInfo from "@/components/movieInfo";
import Head from "next/head";

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
        <>
            <Head>
                <title>{movie.Title}</title>
                <meta name="google" content="notranslate" />
                <link
                    rel="canonical"
                    href={"https://luna-edge-testing-task.vercel.app/" + movie.imdbID}
                    key="canonical"
                />
                <meta name="description" content={movie.Plot}/>
            </Head>
            <MovieInfo movie={movie} />
        </>
    );
};

export default MoviePage;