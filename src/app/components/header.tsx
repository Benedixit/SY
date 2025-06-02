"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"


export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <header className={`bg-white fixed border-b-1 border-zinc-400 w-full font-medium text-[#282829] font-[family-name:var(--font-lexend)] tracking-tighter transition-all duration-300 ease-in-out text-[18px]} z-50`}>
            <nav className="grid grid-cols-2 justify-center py-6 lg:mx-32 4xl:mx-64 mx-10 rounded-2xl">
                <Image src="/images/sabiyou_logo.png" alt="Sabiyou Logo" width={150} height={150} className="lg:w-20 w-14" />
                <ul className="lg:flex gap-x-4 hidden place-items-center place-self-end">
                    <li className="py-2 px-4 rounded-lg hover:text-[#53007B]"><Link href="/">Home</Link></li>
                    <li className="py-2 px-4 rounded-lg hover:text-[#53007B]"><Link href="/about">About</Link></li>
                    <li className="py-2 px-4 rounded-lg hover:text-[#53007B]"><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact" className="px-6 py-3 font-medium border-2 border-transparent hover:border-[#53007B] hover:bg-transparent bg-[#53007B] hover:text-[#53007B] text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#53007B] focus:ring-offset-2 transition duration-300 ease-in-out">Contact Us</Link></li>
                </ul>


                <div className="relative w-10 h-10 flex lg:hidden place-content-start place-self-end">
                    <button onClick={() => setIsOpen(!isOpen)} className="relative w-full h-full">
                        {/* Menu Icon */}
                        <Image
                            src="/images/menu-bar.svg"
                            alt="menu icon"
                            width={40}
                            height={40}
                            className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                                }`}
                        />
                        {/* Close Icon */}
                        <Image
                            src="/images/close.svg"
                            alt="close icon"
                            width={40}
                            height={40}
                            className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                }`}
                        />
                    </button>
                </div>


            </nav>
            {isOpen &&
                <div className="transition-all duration-300 ease-in-out transform lg:hidden flex flex-col bg-white gap-y-10 h-[90vh] pt-12 pl-10 text-[22px] tracking-tighter font-bold overflow-hidden max-h-screen">
                    <a href="" className="py-2 px-4 rounded-lg hover:text-[#53007B]">Home</a>
                    <a href="" className="py-2 px-4 rounded-lg hover:text-[#53007B]">About</a>
                    <a href="" className="py-2 px-4 rounded-lg hover:text-[#53007B]">Blog</a>
                    <a href="" className="py-2 px-4 rounded-lg hover:text-[#53007B]">Contact Us</a>
                </div>
            }


        </header>


    );
}
