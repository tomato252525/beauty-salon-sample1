import Head from 'next/head'
import Image from 'next/image'
import { Federant, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'
import { motion } from 'framer-motion'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Beauty Salon 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Splide
          aria-label="bg"
          options={{
            type: 'fade',
            rewind: true,
            autoplay: true,
            interval: 4000,
            speed: 2000,
            arrows: false,
            pagination: false,
            pauseOnHover: false,
            pauseOnFocus: false,
          }}
        >
          <SplideSlide className="h-screen overflow-hidden">
            <Image className="object-cover" src="/bg-sample1.jpg" layout="fill" alt="" />
          </SplideSlide>
          <SplideSlide className="h-screen overflow-hidden">
            <Image className="object-cover" src="/bg-sample2.jpg" layout="fill" alt="" />
          </SplideSlide>
          <SplideSlide className="h-screen overflow-hidden">
            <Image className="object-cover" src="/bg-sample3.jpg" layout="fill" alt="" />
          </SplideSlide>
        </Splide>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <p></p>
        </div>
      </main>
      <Footer />
    </motion.div>
  )
}
