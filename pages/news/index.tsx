import Head from "next/head"
import Header from "@/components/Header"
import Image from "next/image"
import { motion } from 'framer-motion'

export default function News() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-1]">
                <Image className="object-cover" src="/reserve-bg.jpg" layout="fill" alt="" />
            </div>
            <Head>
                <title>NEWS | Beauty Salon 1</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="text-white pt-16 md:pt-28">
                <div className="p-5" id="news">
                    <h1 className="text-6xl px-0 pb-10 font-bold md:px-14">NEWS</h1>
                    <div className="">

                    </div>
                </div>
            </main>
        </motion.div >
    )
}