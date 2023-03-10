import React from "react";
import useSWR from "swr";
import {getMovieById} from "@/services/getMovieById";
import Poster from "@/components/poster";
import {Skeleton} from "@mui/material";
import Link from "next/link";
import {useActions} from "@/hooks/useActions";

interface FavouriteDialogItemInterface {
    IMDbId: string;
}

const FavouriteDialogItem: React.FC<FavouriteDialogItemInterface> = ({IMDbId}) => {

    const {data, isLoading} = useSWR(process.env.NEXT_PUBLIC_HREF + `&i=${IMDbId}&plot=full`, getMovieById);
    const {setIsOpenFavouriteDialog} = useActions();

    const width = 200;
    const height = 300;

    function renderFavouriteDialogItem(): JSX.Element {
        if (isLoading) return <Skeleton variant="rectangular" width={width} height={height} animation={"wave"}/>;
        return (
            <Link href={`/${IMDbId}`} className={"hover:drop-shadow-lg"}
                  onClick={() => setIsOpenFavouriteDialog(false)}>
                <Poster poster={data?.Poster ?? ""} width={`${width}px`} height={`${height}px`}/>
            </Link>
        );
    }

    return renderFavouriteDialogItem();
};

export default FavouriteDialogItem;