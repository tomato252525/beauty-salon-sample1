import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'

export default function Reserve() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-1]">
                <Image className="object-cover" src="/reserve-bg.jpg" layout="fill" alt="" />
            </div>
            <Header />
            <main className="h-screen py-32 text-white">
                <h1 className="text-6xl px-10 font-bold md:px-14">RESERE</h1>
                <div className="px-12 absolute inset-0 flex items-center md:px-16">
                    <div>
                        <Link href="tel:000-000-0000" className="flex hover:text-amber-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <p className="text-2xl">：000-000-0000</p>
                        </Link>
                        <Link href="https://beauty.hotpepper.jp/" className="flex hover:text-amber-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            <p className="text-2xl">：Web予約</p>
                        </Link>
                        <div className="my-5">
                            <p>営業時間：08:30 ~ 18:00</p>
                            <p>定休日　：毎週月曜日＆第2第3火曜日</p>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    )
}