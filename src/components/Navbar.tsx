"use client"

import { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


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
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="bg-transparent" >
            <NavbarContent className="sm:hidden text-primary bg-transparent" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link href="../" className="font-bold text-text">
                        SPOTTER
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Link href="../" className="font-bold text-text">
                        SPOTTER
                    </Link>
                </NavbarBrand>
                <NavbarItem>
                    <Link className="text-text" href="#">
                        Enterprise
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="../blog" className="text-text">
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
