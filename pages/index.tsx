import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {}
    };
};

export default function Home() {
    return (
        <>
            <h2 className={"text-red-400"}>
                Hello world
            </h2>
        </>
    );
}
