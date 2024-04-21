"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import SearchComponet from "./SearchComponent"
import UserDropdown from "./UserDropdown"


export default function Navbar() {
    const [isFullScreen, setFullScreen] = useState(false)
    const [isDarkMode, setDarkMode] = useState(false)

    function ScreenFullClick() {
        if (document.fullscreenEnabled && document.fullscreenElement) {
            document.exitFullscreen()
            setFullScreen(false)
        } else {
            document.documentElement.requestFullscreen()
            setFullScreen(true)
        }
    }
    function ToggleDarkMode() {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.removeItem('dark')
            setDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem('dark', 'true')
            setDarkMode(true)
        }
    }
    useEffect(() => {
        if (localStorage.getItem('dark')) {
            document.documentElement.classList.add("dark")
            setDarkMode(true)
        }
    }, [])



    return (
        <>
            <div className="flex justify-end items-center dark:border-gray-600 dark:border-b  dark:bg-dashboard-third h-16 w-full fixed z-10 bg-white">
                <ul className="p-5 flex items-center justify-between gap-8 max-sm:hidden">
                    <div>
                        <SearchComponet />
                    </div>
                    <button className="text-gray-700 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </button>
                    <button onClick={() => ToggleDarkMode()} className="text-gray-700 dark:text-white">
                        {
                            isDarkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            ) :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                )
                        }
                    </button>
                    <button onClick={() => ScreenFullClick()} className="text-gray-700 dark:text-white">
                        {
                            isFullScreen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                                </svg>
                            ) :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                    </svg>
                                )
                        }
                    </button>
                    <div className="flex items-center gap-2">
                        <Image
                            width={40}
                            height={40}
                            src={"/spotter2.webp"}
                            alt="Nexhub"
                            className="rounded-full"
                        >
                        </Image>
                        <div className="flex flex-col text-xs">
                            <h1 className="font-bold">
                                Anderson Marcelo
                            </h1>
                            <p className="text-gray-500">
                                FullStack Developer
                            </p>
                        </div>
                    </div>
                </ul>
                <div className="sm:hidden mx-16">
                    <UserDropdown />
                </div>
            </div>
        </>
    )
}