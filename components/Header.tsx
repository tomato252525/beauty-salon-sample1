import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <header className="fixed top-0 w-screen text-white z-[9999]">
                <div className="pt-5 flex justify-between pl-3 md:pl-10">
                    <Link className="text-4xl font-bold" href="#">B-S-1</Link>
                    <div id="nav-drawer">
                        <button onClick={handleMenuOpen} className={
                            openMenu
                                ? "menu-trigger mr-3 md:mr-10"
                                : "hidden"
                        }>
                            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[60px] h-[60px] transition-all ring-2 ring-gray-500 hover:ring-8 group-focus:ring-4 duration-200 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" color="gray" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </button>
                        <button onClick={handleMenuOpen} className={
                            openMenu
                                ? "hidden"
                                : "menu-trigger mr-3 md:mr-10"
                        }>
                            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[60px] h-[60px] transition-all ring-2 ring-white hover:ring-8 group-focus:ring-4 duration-200 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                        </button>
                        <nav className={
                            openMenu
                                ? 'nav-bg element -visible'
                                : 'nav-bg element'
                        }>
                            <ul className="menu">
                                <li><Link href="./news/">NEWS</Link></li>
                                <li><Link href="./menu/">MENU</Link></li>
                                <li><Link href="./gallery/">GALLERY</Link></li>
                                <li><Link href="./access/">ACCESS</Link></li>
                                <li><Link href="./reserve/">RESERVE</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}