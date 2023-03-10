import React, {ReactNode} from "react";
import {Dialog, DialogTitle} from "@mui/material";
import {useAppSelector} from "@/hooks/useAppSelector";
import {useActions} from "@/hooks/useActions";
import FavouriteDialogItem from "@/components/favouriteDialogItem";

const FavouriteDialog = () => {
    const {isOpenFavouriteDialog, favouritesLocalStorageKey} = useAppSelector(state => state.global);
    const {setIsOpenFavouriteDialog} = useActions();


    function renderFavouriteDialogItems(): ReactNode | ReactNode[] {
        const value = localStorage.getItem(favouritesLocalStorageKey);

        if (value) {
            return JSON.parse(value).map((elem: string, index: number) => (
                <FavouriteDialogItem IMDbId={elem} key={index}/>
            ));
        }

        return <h2 className={"m-[50px] text-xl"}>There is no favourite movies</h2>;
    }

    return (
        <Dialog
            open={isOpenFavouriteDialog}
            onClose={() => setIsOpenFavouriteDialog(false)}
            maxWidth={"md"}
        >
            <DialogTitle>Favourite movies</DialogTitle>
            <div className={"flex flex-row flex-wrap gap-3 justify-center m-[20px]"}>
                {typeof window !== "undefined" ? renderFavouriteDialogItems() : null}
            </div>
        </Dialog>
    );
};

export default FavouriteDialog;