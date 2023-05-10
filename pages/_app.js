import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState({ value: null, email: null });
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router.query]);
  return (
    <>
      <LoadingBar
        color="#24f0ff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
