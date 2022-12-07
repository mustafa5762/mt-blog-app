import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <AnimatePresence> <motion.div key={router.route} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}> <Component {...pageProps} /> </motion.div> </AnimatePresence>
}

export default MyApp
