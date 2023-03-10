import React from "react";

interface InfoItemInterface {
    title: string,
    values: string
}

const InfoItem: React.FC<InfoItemInterface> = ({title, values}) => (
    <div className={"flex flex-col items-center w-full"}>
        <h3 className={"text-[20px] text-primary underline underline-offset-[5px] mb-[10px]"}>
            {title}
        </h3>
        <p className={"w-full"}>
            {values === "N/A" ? "There is no information": values}
        </p>
    </div>
);

export default InfoItem;