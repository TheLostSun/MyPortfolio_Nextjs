import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Big_Shoulders_Display, Public_Sans } from "next/font/google";
import Layout from "@/components/Layout";

const display = Big_Shoulders_Display({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800"] });
const body = Public_Sans({ subsets: ["latin"], variable: "--font-body" });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${display.variable} ${body.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
