import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Script from "next/script";

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-custom-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading your experience...</p>
    </div>
  </div>
);

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Virginia's Art Studio</title>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JV0GB2Z0DY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JV0GB2Z0DY');
        `}
        </Script>
        <meta
          name="description"
          content="Discover unique custom paintings, art gallery collections, and professional art studio services. We offer original artwork, commissioned pieces, and various painting categories."
        />
        <meta
          name="keywords"
          content="custom paintings, art gallery, original artwork, commissioned art, art studio, painting categories, professional artist"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon1.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon1.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6B46C1" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <Toaster />
          <main className="font-poppins">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </PersistGate>
      </Provider>
    </>
  );
}
