import React from "react";
import SearchingBar from "@/components/searchingBar";
import {useAppSelector} from "@/hooks/useAppSelector";
import useSWR from "swr";
import {getMoviesByName} from "@/services/getMoviesByName";
import Loading from "@/components/loading";

const Home = () => {
    const {searchingValue} = useAppSelector(state => state.global);

    const {data, isLoading} = useSWR(process.env.NEXT_PUBLIC_HREF, url => getMoviesByName(url, searchingValue));

    return (
        <section className={"w-full flex flex-col justify-center items-center"}>
            <SearchingBar/>
            <div>

            </div>
        </section>
    );
};

export default Home;
