import React from "react";
import {OutlinedInput} from "@mui/material";
import {useAppSelector} from "@/hooks/useAppSelector";
import {useActions} from "@/hooks/useActions";
import SearchIcon from "@mui/icons-material/Search";
import FavouriteListButton from "@/components/favouriteListButton";

const SearchingBar = () => {
    const {searchingValue} = useAppSelector(state => state.global);
    const {setSearchingValue} = useActions();

    return (
        <div className={"w-full h-[55px] flex flex-row gap-x-[10px] justify-center items-center"}>
            <OutlinedInput
                placeholder="Search..."
                sx={{
                    width: "100%",
                    height: "100%"
                }}
                value={searchingValue}
                startAdornment={<SearchIcon color={"primary"} sx={{marginRight: "10px"}}/>}
                onChange={(e) => setSearchingValue(e.target.value)}
            />
            <FavouriteListButton />
        </div>
    );
};

export default SearchingBar;