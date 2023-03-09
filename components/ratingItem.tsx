import React from "react";

interface RatingItemInterface {
    title: string;
    rate: string | number;
}

const RatingItem: React.FC<RatingItemInterface> = ({title, rate}) => {
    return (
        <div className={"flex flex-row gap-x-1 border-2 rounded-[2px] p-1"}>
            <h4>
                {title}:
            </h4>
            <p className={"text-primary"}>
                {rate}
            </p>
        </div>
    );
};

export default RatingItem;