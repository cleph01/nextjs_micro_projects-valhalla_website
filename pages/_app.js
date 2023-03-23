import "@/styles/globals.css";
import { Provider } from "react-redux";
import { Manrope } from "next/font/google";
import { reduxStore } from "../redux/store";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
    return (
        <Provider store={reduxStore}>
            <div className={manrope.className}>
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}
