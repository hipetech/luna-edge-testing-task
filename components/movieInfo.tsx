import React, {ReactNode} from "react";
import {MovieFullInfo} from "@/types/movieFullInfo";
import Poster from "@/components/poster";
import FavouriteCheckBoxMovieCheckbox from "@/components/favouriteCheckBoxMovieCheckbox";
import {formatNumber} from "@/tools/formatNumber";
import MovieLabelType from "@/components/movieLabelType";
import RatingItem from "@/components/ratingItem";
import InfoItem from "@/components/infoItem";
import {Chip} from "@mui/material";

interface MovieInfoInterface {
    movie: MovieFullInfo;
}

const MovieInfo: React.FC<MovieInfoInterface> = ({movie}) => {
    const Favorite = () => (
        <div className={"absolute left-2 top-2"}>
            <FavouriteCheckBoxMovieCheckbox IMDbId={movie.imdbID}/>
        </div>
    );

    const MovieAdditionalInformation = () => (
        <div className={"flex flex-col items-center gap-y-3 mt-5 text-center"}>
            <InfoItem title={"Director"} values={movie.Director}/>
            <InfoItem title={"Writer"} values={movie.Writer}/>
            <InfoItem title={"Actors"} values={movie.Actors}/>
            <InfoItem title={"Box Office"} values={movie.BoxOffice}/>
        </div>
    );

    const MovieTitle = () => (
        <div className={"flex flex-row items-center gap-x-3"}>
            <h2 className={"text-[30px]"}>
                {movie.Title}
            </h2>
            <MovieLabelType movieType={movie.Type}/>
        </div>
    );

    const MovieCategories = () => {
        function renderCountries(): ReactNode[] {
            return movie.Country.split(", ").map((elem, index) => (
                <Chip label={elem} color="error" key={index} size={"small"}/>
            ));
        }

        return (
            <div className={"flex flex-row lg:justify-start gap-x-4"}>
                {renderCountries()}
            </div>
        );
    };

    const AgeDateRuntime = () => {
        const releasedDate = new Date(movie.Released);

        const day = formatNumber(releasedDate.getDate());
        const month = formatNumber(releasedDate.getMonth());

        return (
            <div className={"flex flex-row gap-x-2 items-center"}>
                <p className={"border-2 rounded-[2px] p-1"}>{movie.Rated}</p>
                <p>{`${day}.${month}.${releasedDate.getFullYear()}`}</p>
                <p>{movie.Runtime}</p>
            </div>
        );
    };

    const Genres = () => {
        function renderGenres(): ReactNode[] {
            return movie.Genre.split(", ").map((elem, index) => (
                <Chip label={elem} color="success" key={index} size={"small"}/>
            ));
        }

        return (
            <div className={"flex flex-row gap-x-4"}>
                {renderGenres()}
            </div>
        );
    };

    const Awards = () => (
        <p className={"text-primary"}>
            {movie.Awards}
        </p>
    );

    const Rating = () => {
        function renderRating(): ReactNode[] {
            return movie.Ratings.map((elem, index) => (
                <RatingItem title={elem.Source} rate={elem.Value} key={index}/>
            ));
        }

        return (
            <div className={"flex flex-row flex-wrap gap-3"}>
                {renderRating()}
            </div>
        );
    };

    const Plot = () => (
        <div className={"w-full flex flex-col items-center gap-y-3"}>
            <InfoItem title={"Plot"} values={movie.Plot}/>
        </div>
    );

    return (
        <section className={"w-full flex flex-col gap-x-32 lg:flex-row items-center lg:justify-between lg:items-start"}>
            <div className={"w-min relative flex flex-col items-center mb-[10px]"}>
                <Poster poster={movie.Poster} width={"300px"} height={"450px"}/>
                <Favorite/>
                <MovieAdditionalInformation/>
            </div>
            <div className={"flex flex-col w-full gap-y-3"}>
                <MovieTitle/>
                <MovieCategories/>
                <AgeDateRuntime/>
                <Genres/>
                <Awards/>
                <Rating/>
                <Plot/>
            </div>
        </section>
    );
};

export default MovieInfo;