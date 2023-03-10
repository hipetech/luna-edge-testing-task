import React from "react";
import {Button} from "@mui/material";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import {useActions} from "@/hooks/useActions";

const FavouriteListButton = () => {
    const {setIsOpenFavouriteDialog} = useActions();

    return (
        <Button
            variant="outlined"
            sx={{height: "100%"}}
            onClick={() => setIsOpenFavouriteDialog(true)}>
            <StarBorderIcon />
        </Button>
    );
};

export default FavouriteListButton;