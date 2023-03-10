import React, {useEffect, useState} from "react";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {useAppSelector} from "@/hooks/useAppSelector";

interface FavouriteCheckBoxMovieInterface {
    IMDbId: string;
}

const FavouriteCheckBoxMovieCheckbox: React.FC<FavouriteCheckBoxMovieInterface> = ({IMDbId}) => {
    const {favouritesLocalStorageKey} = useAppSelector(state => state.global);

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    function onClick(): void {
        const value = localStorage.getItem(favouritesLocalStorageKey);
        const arr = value ? JSON.parse(value) : [];

        if (!isFavorite) {
            localStorage.setItem(favouritesLocalStorageKey, JSON.stringify([...arr, IMDbId]));
        } else {
            localStorage.setItem(favouritesLocalStorageKey, JSON.stringify(arr.filter((elem: string) => elem !== IMDbId)));
        }

        setIsFavorite(!isFavorite);
    }

    useEffect(() => {
        const value = localStorage.getItem(favouritesLocalStorageKey);

        if (value && JSON.parse(value).includes(IMDbId)) {
            setIsFavorite(true);
        }
    }, [IMDbId, favouritesLocalStorageKey]);

    return (
        <div
            className={"bg-white rounded-full p-1 flex justify-center items-center drop-shadow-lg cursor-pointer"}
            onClick={onClick}
        >
            {isFavorite ? <StarIcon color={"primary"}/> : <StarBorderIcon color={"primary"}/>}
        </div>
    );
};

export default FavouriteCheckBoxMovieCheckbox;