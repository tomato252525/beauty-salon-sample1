import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="fixed bottom-0 w-screen text-white pb-5">
                <div className="flex justify-between pl-3 md:px-10">
                    <div>
                        <p>営業時間：08:30 ~ 18:00</p>
                        <p>定休日  ：毎週月曜日＆第2第3火曜日</p>
                    </div>
                    <div className="hidden md:block">
                        <Link href="tel:000-000-0000" className="flex hover:text-amber-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <p className="text-2xl">:000-000-0000</p>
                        </Link>
                        <Link href="#" className="flex hover:text-amber-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            <p className="text-2xl">:Web予約</p>
                        </Link>
                    </div>
                    <Link href="./reserve/" className="absolute bottom-0 right-0 mr-3 mb-7 block md:hidden">
                        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[60px] h-[60px] transition-all ring-2 ring-white hover:ring-8 group-focus:ring-4 duration-200 shadow-md">
                            予約
                        </div>
                    </Link>
                </div>
            </footer>
        </>
    )
}