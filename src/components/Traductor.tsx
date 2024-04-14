"use client"

import React from "react";
import { Dropdown,  DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from "next/link";

function SaveChangeLenguaje(idioma: string) {
    localStorage.setItem('lenguaje', idioma);
}

export default function App() {
    return (
        <Dropdown backdrop="blur">
            <DropdownTrigger>
                <Button className="text-text"
                    variant="bordered"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    Language
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="flat" className="w-full flex justify-start" aria-label="Dropdown menu with shortcut">
                <DropdownItem key="new">
                    <Link onClick={() => SaveChangeLenguaje('es')} href={'../es'} className="w-full inline-block flex justify-between items-center gap-2">
                        ES
                        <img src="es.svg" alt="Español" className="w-8" />
            <DropdownMenu variant="faded" aria-label="Static Actions" className="w-max flex items-start justify-start">
                <DropdownItem key="copy">
                    <Link onClick={() => SaveChangeLenguaje('en')} href={'../en'} className="w-full inline-block flex justify-between items-center gap-2">
                        EN
                        <img src="en.svg" alt="English" className="w-8" />
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown >
    );
}
