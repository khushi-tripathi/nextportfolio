'use client';

import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl  ml-[1.4rem] mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">

          </MenuItem>
        </Link>

        <Link href={"/projects"} className="">
          <MenuItem setActive={setActive} active={active} item="Projects" className="ml-24">

          </MenuItem>
        </Link>

      </Menu>
    </div>
  )
}

export default Navbar