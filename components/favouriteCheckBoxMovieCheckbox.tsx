import React, {useEffect, useState} from "react";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface FavouriteCheckBoxMovieInterface {
    IMDbId: string;
}

const FavouriteCheckBoxMovieCheckbox: React.FC<FavouriteCheckBoxMovieInterface> = ({IMDbId}) => {
    const key = "favourites";

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    function onClick(): void {
        const value = localStorage.getItem(key);
        const arr = value ? JSON.parse(value) : [];

        if (!isFavorite) {
            localStorage.setItem(key, JSON.stringify([...arr, IMDbId]));
            setIsFavorite(true);
        } else {
            localStorage.setItem(key, JSON.stringify(arr.filter((elem: string) => elem !== IMDbId)));
            setIsFavorite(false);
        }
    }

    useEffect(() => {
        const value = localStorage.getItem(key);

        if (value && JSON.parse(value).includes(IMDbId)) {
            setIsFavorite(true);
        }
    }, [IMDbId]);

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