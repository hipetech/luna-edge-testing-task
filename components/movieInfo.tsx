import React, {ReactNode} from "react";
import {MovieFullInfo} from "@/types/movieFullInfo";
import Poster from "@/components/poster";
import FavouriteCheckBoxMovieCheckbox from "@/components/favouriteCheckBoxMovieCheckbox";
import {formatNumber} from "@/tools/formatNumber";
import MovieLabelType from "@/components/movieLabelType";
import RatingItem from "@/components/ratingItem";

interface MovieInfoInterface {
    movie: MovieFullInfo;
}

const MovieInfo: React.FC<MovieInfoInterface> = ({movie}) => {

    const GenreItem: React.FC<{ genre: string }> = ({genre}) => (
        <p className={"w-max rounded-full px-2 text-white drop-shadow-lg bg-success"}>
            {genre}
        </p>
    );

    function renderGenres(): ReactNode[] {
        return movie.Genre.split(", ").map(elem => <GenreItem genre={elem} key={elem}/>);
    }

    const releasedDate = new Date(movie.Released);

    const day = formatNumber(releasedDate.getDate());
    const month = formatNumber(releasedDate.getMonth());

    const InfoItem: React.FC<{ title: string, values: string }> = ({title, values}) => (
        <div className={"flex flex-col items-center w-full"}>
            <h3 className={"text-[20px] text-primary underline underline-offset-[5px] mb-[10px]"}>
                {title}
            </h3>
            <p className={"w-full"}>
                {values === "N/A" ? "There is no information": values}
            </p>
        </div>
    );

    const CountryItem: React.FC<{ country: string }> = ({country}) => (
        <p className={"w-max rounded-full px-2 text-white drop-shadow-lg bg-error"}>
            {country}
        </p>
    );

    function renderRating(): ReactNode[] {
        return movie.Ratings.map((elem, index) => (
            <RatingItem title={elem.Source} rate={elem.Value} key={index}/>
        ));
    }

    return (
        <section className={"w-full flex flex-row justify-between gap-x-32"}>
            <div className={"relative flex flex-col items-center"}>
                <Poster poster={movie.Poster} width={"300px"} height={"450px"}/>
                <div className={"absolute left-2 top-2"}>
                    <FavouriteCheckBoxMovieCheckbox IMDbId={movie.imdbID}/>
                </div>
                <div className={"w-1/2 flex flex-col items-center gap-y-3 mt-5 text-center"}>
                    <InfoItem title={"Director"} values={movie.Director}/>
                    <InfoItem title={"Writer"} values={movie.Writer}/>
                    <InfoItem title={"Actors"} values={movie.Actors}/>
                    <InfoItem title={"BoxOffice"} values={movie.BoxOffice} />
                </div>
            </div>
            <div className={"flex flex-col items-center w-full gap-y-3"}>
                <div className={"flex flex-row items-center gap-x-3"}>
                    <h2 className={"text-[30px]"}>
                        {movie.Title}
                    </h2>
                    <MovieLabelType movieType={movie.Type}/>
                </div>
                <CountryItem country={movie.Country}/>
                <h3 className={"flex flex-row gap-x-2 justify-center items-center"}>
                    <span className={"border-2 rounded-[2px] p-1"}>{movie.Rated}</span>
                    <span>{`${day}.${month}.${releasedDate.getFullYear()}`}</span>
                    <span>{movie.Runtime}</span>
                </h3>
                <div className={"flex flex-row justify-center items-center gap-x-4"}>
                    {renderGenres()}
                </div>
                <div className={"flex flex-row flex-wrap gap-3 justify-center"}>
                    {renderRating()}
                </div>
                <div className={"w-full flex flex-col items-center gap-y-3"}>
                    <InfoItem title={"Plot"} values={movie.Plot}/>
                </div>
            </div>
        </section>
    );
};

export default MovieInfo;