import Head from "next/head"
import Header from "@/components/Header"
import Image from "next/image"
import { motion } from 'framer-motion'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import '@splidejs/react-splide/css'

export default function Gallery() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-1]">
                <Image className="object-cover" src="/reserve-bg.jpg" fill alt="" />
            </div>
            <Head>
                <title>GALLERY | Beauty Salon 1</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="text-white pt-16 md:pt-28">
                <div className="p-5" id="gallery">
                    <h1 className="text-6xl px-0 pb-10 font-bold md:px-14">GALLERY</h1>
                    <div className="lg:mx-32 xl:mx-72">
                        <Splide
                            aria-label="bg"
                            className="bg-white p-1"
                            options={{
                                type: 'fade',
                                rewind: true,
                                speed: 2000,
                                pauseOnHover: false,
                                pauseOnFocus: false,
                                width: "100%",
                                heightRatio: 0.6,
                            }}
                        >
                            <SplideSlide className="relative overflow-hidden">
                                <Image className="object-cover" src="/bg-sample1.jpg" fill alt="" />
                            </SplideSlide>
                            <SplideSlide className="relative overflow-hidden">
                                <Image className="object-cover" src="/bg-sample2.jpg" fill alt="" />
                            </SplideSlide>
                            <SplideSlide className="relative overflow-hidden">
                                <Image className="object-cover" src="/bg-sample3.jpg" fill alt="" />
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </main>
        </motion.div >
    )
}