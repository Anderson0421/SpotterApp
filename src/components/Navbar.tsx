"use client"

import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Traductor from "./Traductor";
import GetLang from '@/components/GetLang';


export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [dictionary, setDictionary] = React.useState({});

    useEffect(() => {
        GetLang().then((data) => {
            setDictionary(data);
        });
    }, []);

    const menuItems = [
        "Get Started",
        "Get Started",
        "Get Started",
        "Get Started",
        "Get Started",
        "Get Started",
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="bg-midnight"
        >
            <NavbarContent className="sm:hidden text-primary" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-text">
                        SPOTTER
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-text">
                        SPOTTER
                    </p>
                </NavbarBrand>
                <NavbarItem>
                    <Link className="text-text" href="#">
                        {dictionary.navbar1}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" className="text-text">
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-text" href="#">
                        Get Started
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex pr-2">
                    <Link href="#" className="text-text text-sm">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-midnight bg-primary px-4 py-2 rounded-lg text-sm" href="#" >
                        Sign Up
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex pr-2">
                    <Traductor />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-transparent">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-text"
                            href="#"
                            size="lg"

                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
