import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import store from "@/store";

import {Roboto} from "next/font/google";
import {useEffect, useState} from "react";
import Loading from "@/components/loading";
import {Router} from "next/router";

const roboto = Roboto({weight: "400", subsets: ["latin"]});

export default function App({Component, pageProps}: AppProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const LoadingItem = () => (
        <div className={"w-full h-screen bg-transparent fixed absolute-center"}>
            <Loading />
        </div>
    );

    useEffect(() => {
        Router.events.on("routeChangeStart", ()=>{
            setIsLoading(true);
        });

        Router.events.on("routeChangeComplete", ()=>{
            setIsLoading(false);
        });

        Router.events.on("routeChangeError", () =>{
            setIsLoading(false);
        });

    }, []);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isLoading]);

    return (
        <Provider store={store}>
            <main className={roboto.className + " w-[75%] mx-auto"}>
                <Component {...pageProps} />
            </main>
            {isLoading && <LoadingItem />}
        </Provider>
    );
}
