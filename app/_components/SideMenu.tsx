"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { MenuIcon } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";
import Link from "next/link";

import { headerLinks } from "../_lib/data";
import { useAppSelector } from "../_store/hooks";
import { LanguageButton } from "./LanguageButton";

export const SideMenu = () => {
    const { language } = useAppSelector((state) => state.language);
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
                    <DialogPanel className="fixed flex flex-col justify-between items-center gap-20 py-20 rounded-2xl bg-white h-full w-3/4 md:1/2">
                        <CloseIcon handleClick={() => setSideMenuOpen(false)} />
                        <ul className="flex flex-col items-center gap-10">
                            {headerLinks.map((link) => (
                                <Link
                                    className="text-xs p-2 border-[3px] border-transparent rounded-lg hover:border-accent active:bg-accent"
                                    key={link.textUkr}
                                    href={link.href}
                                    onClick={() => setSideMenuOpen(false)}
                                >
                                    {language === "ua"
                                        ? link.textUkr
                                        : link.textEng}
                                </Link>
                            ))}
                        </ul>
                        <LanguageButton language={language} />
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};
