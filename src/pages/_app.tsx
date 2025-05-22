import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { M_PLUS_1p, Caveat } from "next/font/google";

const mplus = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={mplus.className}>
      <Component {...pageProps} />
    </div>
  );
}

export { caveat };