"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LinksItems } from "@/dashboard/assets/SidebarItemsHome";

export default function Sidebar() {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenClick() {
        setIsOpen(!isOpen)
    }

    return (
        <aside
            className={`h-screen  transition-all duration-300 bg-midnight ${isHovered ? 'w-48' : 'w-20'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-midnight py-3 flex justify-center items-center border-b border-gray-500">
                <Image width={200} height={200} className="w-10" src="/favicon.ico" alt="Logo" />
            </div>
            <div className={`flex mt-5 flex-col ${!isHovered && 'items-center'}  mx-2`}>
                <h1 className={`text-gray-300 mb-2 text-xs ${isHovered ? 'ml-2' : 'ml-0'}`}>
                    {isHovered ? (
                        'MAIN'
                    ) : (
                        <div className="rounded-full h-2 w-2 border"></div>
                    )}
                </h1>
                <Link onClick={() => handleOpenClick()} href={"#"} className={`text-white  ${isHovered ? 'bg-gray-700 mt-3 p-3' : ''} w-full  rounded-lg flex justify-between items-center gap-3 text-xs p-2 duration-300 transition-all`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isHovered ? 'w-5' : 'bg-gray-700 p-3 w-11'} rounded-lg `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <p className={` ${isHovered ? '' : 'hidden'}`}>
                        Dashboard
                    </p>
                    <p className={`${isHovered ? '' : 'hidden'}`}>{
                        isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        )
                            :
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            )
                    }



                    </p>
                </Link>
                <ul className={`ml-6 flex flex-col gap-5 text-xs ${isOpen ? 'mt-3 mb-2' : ''} ${isHovered ? '' : 'mt-0'}`}>
                    {isOpen && (
                        isHovered && (
                            <>
                                {
                                    LinksItems.map((item, index) => {
                                        return (
                                            <Link href={item.href} key={index} className="flex font-semibold text-gray-300 transition-all hover:text-white gap-2 items-center">
                                                <li className="list-disc">
                                                    {item.name}
                                                </li>
                                            </Link>
                                        )
                                    })
                                }
                            </>


                        )
                    )}

                </ul>
                <Link href={"#"} className={`text-white  ${isHovered ? 'bg-gray-700 mt-3 p-3' : ''} w-full  rounded-lg flex justify-between items-center gap-3 text-xs p-2 duration-300 transition-all`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isHovered ? 'w-5' : 'bg-gray-700 p-3 w-11'} rounded-lg `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>

                    <p className={` ${isHovered ? '' : 'hidden'}`}>
                        Destroy this
                    </p>
                    <p className={`${isHovered ? '' : 'hidden'}`}>{
                        isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        )
                            :
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            )
                    }
                    </p>
                </Link>

            </div>
        </aside >
    )
}
