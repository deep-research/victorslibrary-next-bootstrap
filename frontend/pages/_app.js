import '../styles/globals.css'

// https://www.kindacode.com/article/how-to-correctly-use-bootstrap-5-in-next-js/#Installing
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
