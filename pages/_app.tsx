import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import store from "@/store";

import {Roboto} from "next/font/google";

const roboto = Roboto({weight: "400", subsets: ["latin"]});

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <main className={roboto.className + " w-[75%] mx-auto"}>
                <Component {...pageProps} />
            </main>
        </Provider>
    );
}
