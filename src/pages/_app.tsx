import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
