"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { MenuIcon } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { headerLinks } from "../_lib/data";
import Link from "next/link";

export const SideMenu = () => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    return (
        <>
            <MenuIcon handleClick={() => setSideMenuOpen(true)} />
            <Dialog
                open={sideMenuOpen}
                onClose={() => setSideMenuOpen(false)}
                className="lg:hidden"
            >
                <DialogBackdrop className="fixed inset-0 bg-black/70" />
                <div className="fixed inset-0 flex w-screen items-center justify-center">
                    <DialogPanel className="fixed flex flex-col justify-between items-center gap-20 py-20 rounded-2xl bg-white h-full w-2/3 md:1/2">
                        <CloseIcon
                            handleClick={() => setSideMenuOpen(false)}
                        />
                        <ul className="flex flex-col items-center gap-10">
                            {headerLinks.map((link) => (
                                <Link
                                    className="text-xs p-2 border-[3px] border-transparent rounded-lg hover:border-accent active:bg-accent"
                                    key={link.text}
                                    href={link.href}
                                    onClick={() => setSideMenuOpen(false)}
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </ul>
                        <Link
                            className="flex text-xs px-3 py-2 border border-transparent rounded-lg hover:border-accent active:bg-accent"
                            href="/"
                        >
                            en
                        </Link>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};
