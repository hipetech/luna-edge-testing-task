import React from "react";
import {OutlinedInput} from "@mui/material";
import {useAppSelector} from "@/hooks/useAppSelector";
import {useActions} from "@/hooks/useActions";
import SearchIcon from "@mui/icons-material/Search";
const SearchingBar = () => {
    const {searchingValue} = useAppSelector(state => state.global);
    const {setSearchingValue} = useActions();

    return (
    <form className={"w-full flex flex-row gap-x-[10px] justify-center items-center"}>
            <OutlinedInput
                placeholder="Search..."
                sx={{
                    width: "100%"
                }}
                value={searchingValue}
                startAdornment={<SearchIcon color={"primary"} sx={{marginRight: "10px"}}/>}
                onChange={(e) => setSearchingValue(e.target.value)}
            />
        </form>
    );
};

export default SearchingBar;