import React, {ReactNode} from "react";
import SearchingBar from "@/components/searchingBar";
import {useAppSelector} from "@/hooks/useAppSelector";
import useSWR from "swr";
import {getMoviesByName} from "@/services/getMoviesByName";
import Loading from "@/components/loading";
import MovieItem from "@/components/movieItem";

const Home = () => {
    const {searchingValue} = useAppSelector(state => state.global);

    const {data, isLoading} = useSWR(process.env.NEXT_PUBLIC_HREF, url => getMoviesByName(url, searchingValue));

    function renderMovie(): ReactNode[] {
        if (data) {
            return data.map(elem => <MovieItem movie={elem} key={elem.imdbID}/>);
        }

        return [];
    }

    return (
        <section className={"w-full"}>
            <SearchingBar/>
            <div className={"flex flex-row flex-wrap gap-[35px] justify-center mt-5"}>
                {isLoading ? <Loading />: renderMovie()}
            </div>
        </section>
    );
};

export default Home;
