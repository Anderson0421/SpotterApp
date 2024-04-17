"use client"
import Image from "next/image";
import { useState } from "react";
import { LinksItems, LinksItemsPage, LinksItemTasks,DashboardItems } from "@/dashboard/assets/SidebarItemsHome";
import { DropdownLinkSidebar } from "./DropdownComponentLink";

export default function Sidebar() {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPages, setIsOpenPages] = useState(false);
    const [isOpenTasks, setOpenTasks] = useState(false);
    const [isOpenEnterprises, setOpenEnterprises] = useState(false);

    function handleOpenClick() {
        setIsOpen(!isOpen)
    }
    function handleOpenClickPages() {
        setIsOpenPages(!isOpenPages)
    }
    function handleOpenClickTasks() {
        setOpenTasks(!isOpenTasks)
    }
    function handleOpenClickEnterprises(){
        setOpenEnterprises(!isOpenEnterprises)
    }

    return (
        <aside
            className={`h-screen  transition-all custom-scrollbar-aside duration-300 bg-night ${isHovered ? 'w-48 overflow-y-scroll' : 'w-20'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-night py-3 flex justify-center items-center border-b border-gray-500">
                <Image width={200} height={200} className="w-10" src="/favicon.ico" alt="Logo" />
            </div>
            <div className={`flex mt-5 flex-col ${!isHovered && 'items-center'}  mx-2`}>
                <DropdownLinkSidebar
                    ITEM_NAME="Dashboard"
                    ITEM_TOP_NAME="DASHBOARD"
                    isHovered={isHovered}
                    handleOpenClickPages={handleOpenClick}
                    isOpenPages={isOpen}
                    LinksItems={LinksItems}
                    IconSVG={(isHovered: boolean) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${isHovered ? 'w-5' : 'bg-gray-300/30 p-3 w-11'} rounded-lg `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    }
                />
                <DropdownLinkSidebar
                    ITEM_NAME="Enterprises"
                    isHovered={isHovered}
                    handleOpenClickPages={handleOpenClickEnterprises}
                    isOpenPages={isOpenEnterprises}
                    LinksItems={DashboardItems}
                    IconSVG={(isHovered: boolean) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${isHovered ? 'w-5' : 'bg-gray-300/30 p-3 w-11'} rounded-lg `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>

                    }
                />
                <DropdownLinkSidebar
                    ITEM_NAME="Pages"
                    ITEM_TOP_NAME="PAGES"
                    isHovered={isHovered}
                    handleOpenClickPages={handleOpenClickPages}
                    isOpenPages={isOpenPages}
                    LinksItems={LinksItemsPage}
                    IconSVG={(isHovered: boolean) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${isHovered ? 'w-5' : 'bg-gray-300/30 p-3 w-11'} rounded-lg `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                    }
                />
                <DropdownLinkSidebar
                    ITEM_NAME="Task"
                    isHovered={isHovered}
                    handleOpenClickPages={handleOpenClickTasks}
                    isOpenPages={isOpenTasks}
                    LinksItems={LinksItemTasks}
                    IconSVG={(isHovered: boolean) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${isHovered ? 'w-5' : 'bg-gray-300/30 p-3 w-11'} rounded-lg `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>}
                />


            </div>
        </aside >
    )
}
