import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'

export default function Access() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-1]"
            >
                <Image className="object-cover" src="/reserve-bg.jpg" layout="fill" alt="" />
            </motion.div>
            <Header />
            <main className="h-screen text-white py-16 md:py-28">
                <div className="p-5" id="access">
                    <h1 className="text-6xl px-0 pb-10 font-bold md:px-14">ACCESS</h1>
                    <div className="px-5 md:px-16 block md:flex">
                        <p className="hidden md:block">住所：</p>
                        <p>〒000-0000　</p>
                        <p>○○県○○市○○○○ 00-00</p>
                    </div>
                    <div className="px-5 pt-5 md:px-16 md:pb-5">
                        <p>最寄り駅：○○○○</p>
                        <p>バス停　：○○○○</p>
                        <div className="mt-5 md:mb-5">
                            <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin">
                                <Link href="https://www.google.co.jp/maps" target="_blank" rel="noopener noreferrer" className="relative pr-4 pb-1 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Google Map</Link>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-white transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-5" id="reserve">
                    <h1 className="text-6xl px-0 pb-10 font-bold md:px-14">RESERE</h1>
                    <div className="px-5 md:px-16">
                        <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin">
                            <Link href="tel:000-000-0000" className="flex relative pr-4 pb-1 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <p>：000-000-0000</p>
                            </Link>
                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-white transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105">
                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                            </svg>
                        </button>
                        <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin">
                            <Link href="https://beauty.hotpepper.jp/" target="_blank" rel="noopener noreferrer" className="flex relative pr-4 pb-1 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                                <p>：WEB予約</p>
                            </Link>
                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-white transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105">
                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                            </svg>
                        </button>
                        <div className="my-5">
                            <p>営業時間：08:30 ~ 18:00</p>
                            <p>定休日　：毎週月曜日＆第2第3火曜日</p>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div >
    )
}