import "@/styles/globals.css";
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({
      offeset:200,
      duration:1200,
      easing:'ease-in',
      delay:500,
    });
  });

  return <Component {...pageProps} />;
  
}
