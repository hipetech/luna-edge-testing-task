import React, {ReactNode} from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Image from "next/image";

interface PosterInterface {
    poster: string;
    width: string;
    height: string;
}

const Poster: React.FC<PosterInterface> = ({poster, width, height}) => {

    const EmptyPlaceholder = () => (
        <div className={"flex flex-col justify-center items-center w-full h-full border-2 rounded-[2px]"}>
            <InsertPhotoIcon sx={{width: "100px", height: "100px"}} color={"error"}/>
            <h2 className={"text-[18px]"}>There is no poster</h2>
        </div>
    );

    function validatePoster(): ReactNode {
        if (poster === "N/A") return <EmptyPlaceholder/>;
        return (
            <Image src={poster} alt={"poster"} width={1000} height={1000}
                   className={"w-full h-full rounded-[5px]"}/>
        );
    }

    const style = {
        width: width,
        height: height
    };

    return (
        <div className={"object-cover flex justify-center items-center"} style={style}>
            {validatePoster()}
        </div>
    );
};

export default Poster;