import React, {ReactNode, useEffect, useState} from "react";
import {useAppSelector} from "@/hooks/useAppSelector";
import useSWR from "swr";
import {getMoviesByName} from "@/services/getMoviesByName";
import MovieItem from "@/components/movieItem";
import {MovieError} from "@/types/movieError";
import {Pagination} from "@mui/material";
import SearchingBar from "@/components/searchingBar";
import Loading from "@/components/loading";

const MovieItems = () => {
    const {searchingValue} = useAppSelector(state => state.global);
    const [pageIndex, setPageIndex] = useState<number>(1);

    const url = process.env.NEXT_PUBLIC_HREF + `s=${searchingValue}` + `&page=${pageIndex}`;

    const {data, isLoading} = useSWR(url,  getMoviesByName);

    function renderMovie(): ReactNode | ReactNode[] {
        if (data?.Search) {
            return data.Search.map(elem => <MovieItem movie={elem} key={elem.imdbID}/>);
        } else if (data?.Error === MovieError.incorrectIMDbID) {
            return [];
        }

        return <h2>{data?.Error}</h2>;
    }

    function handlePageChange(e: React.ChangeEvent<unknown>, value: number): void {
        setPageIndex(value);
    }

    function renderPagination(): ReactNode {
        if (data?.Search && data.totalResults) return (
            <Pagination
                count={Math.ceil(data.totalResults / 10)}
                variant="outlined"
                color="primary"
                sx={{marginTop: "50px", marginBottom: "50px"}}
                size={"large"}
                page={pageIndex}
                onChange={handlePageChange} />
        );
        return null;
    }

    useEffect(() => setPageIndex(1), [searchingValue]);

    return (
        <section className={"w-full flex flex-col items-center"}>
            <SearchingBar/>
            <div className={"flex flex-row flex-wrap gap-[35px] justify-center mt-5"}>
                {isLoading ? <Loading/> : renderMovie()}
            </div>
            {renderPagination()}
        </section>
    );
};

export default MovieItems;