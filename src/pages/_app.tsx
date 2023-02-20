import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/layout";
import Script from "next/script";
import * as gtag from "../lib/gtag";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={
          gtag.GA_TRACKING_ID
            ? `https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`
            : ``
        }
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={
          gtag.GA_TRACKING_ID
            ? {
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }
            : { __html: `` }
        }
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
