import React from "react";
import {GetServerSideProps, GetServerSidePropsContext} from "next";

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const {movieId} = context.query;

    return {
        props: {}
    };
};

const MovieId = () => {
    return (
        <div>
            Movie page
        </div>
    );
};

export default MovieId;