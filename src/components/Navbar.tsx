"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-0" />
            <p className="text-black dark:text-white">
                The Navbar will show on top of the page
            </p>
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-0 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Projects" >
                </MenuItem>
                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="Home" >
                    </MenuItem>
                </Link>
                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="About" >
                    </MenuItem>
                </Link>

                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="Contact" >
                    </MenuItem>
                </Link>

            </Menu>
        </div>
    );
}
