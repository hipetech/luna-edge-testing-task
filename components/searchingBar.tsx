import React, {FormEvent} from "react";
import {Button, OutlinedInput} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useAppSelector} from "@/hooks/useAppSelector";
import {useActions} from "@/hooks/useActions";
import {mutate} from "swr";

const SearchingBar = () => {
    const {searchingValue} = useAppSelector(state => state.global);
    const {setSearchingValue} = useActions();

    async function onSubmit(e: FormEvent): Promise<void> {
        e.preventDefault();
        await mutate(process.env.NEXT_PUBLIC_HREF);
    }

    return (
    <form className={"w-full flex flex-row gap-x-[10px] justify-center items-center"} onSubmit={onSubmit}>
            <OutlinedInput
                placeholder="Search..."
                sx={{
                    width: "100%"
                }}
                value={searchingValue}
                onChange={(e) => setSearchingValue(e.target.value)}
            />
            <Button size={"large"} sx={{height: "54px"}} variant="outlined" type={"submit"}>
                <SearchIcon/>
            </Button>
        </form>
    );
};

export default SearchingBar;