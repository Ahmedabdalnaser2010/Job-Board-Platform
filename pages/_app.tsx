import Layout from "@/componenets/layout/Layout";
import Loading from "@/componenets/layout/Loading";
import { ApiProvider } from "@/context/apiContext";
import { FilterProvider } from "@/context/filteredJobsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const [isLoading, setIsLoading] = useState(true); // Start with true for initial load
  const router = useRouter();

  useEffect(() => {

    const handlePageLoad = () => setIsLoading(false);
    window.addEventListener('load', handlePageLoad);


    const handleRouteChangeStart = () => setIsLoading(true);
    const handleRouteChangeComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('load', handlePageLoad);
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
      clearTimeout(timeoutId);
    };
  }, [router]);


  return (
    <ApiProvider>
      <FilterProvider>

        <Layout>
          {isLoading && <Loading />}
          <Component {...pageProps} />

        </Layout>
      </FilterProvider>
    </ApiProvider>
  );
}
