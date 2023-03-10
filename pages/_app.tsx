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

    return (
        <Provider store={store}>
            <main className={roboto.className + " w-[75%] mx-auto"}>
                <Component {...pageProps} />
            </main>
            {isLoading && <div className={"w-screen h-screen bg-gray-700"}><Loading /></div>}
        </Provider>
    );
}
