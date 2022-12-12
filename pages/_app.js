import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <><NextNProgress color="#4f46e5" height={1} /><AnimatePresence><motion.div key={router.route} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}> <Component {...pageProps} /> </motion.div> </AnimatePresence></>
}

export default MyApp
