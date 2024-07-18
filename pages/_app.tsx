import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/globals.css'
import { store } from '../Redux/store'
import { Provider } from 'react-redux'

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';
import Head from 'next/head'
// Assuming you have a global CSS file


const variants = {
  initial: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.1 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.0 } },
};

export default function App({ Component, pageProps }: any) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any, { shallow }: any) => {
      if (!shallow) {
        // Perform custom actions before route change
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);


  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  }, []);

  return (<>
    <Head>
      <title>Phoneo</title>
    </Head>

    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </motion.div>
    </AnimatePresence>
  </>)
}
