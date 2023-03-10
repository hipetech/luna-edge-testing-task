import React from "react";
import {Dialog, DialogTitle} from "@mui/material";
import {useAppSelector} from "@/hooks/useAppSelector";
import {useActions} from "@/hooks/useActions";

const FavouriteDialog = () => {
    const {isOpenFavouriteDialog} = useAppSelector(state => state.global);
    const {setIsOpenFavouriteDialog} = useActions();

    return (
        <Dialog open={isOpenFavouriteDialog} onClose={() => setIsOpenFavouriteDialog(false)}>
            <DialogTitle>Favourite movies</DialogTitle>
        </Dialog>
    );
};

export default FavouriteDialog;