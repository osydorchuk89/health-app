"use client";

import Image from "next/image";
import Link from "next/link";

import { headerLinks } from "@/app/_lib/data";
import { useAppSelector } from "@/app/_store/hooks";
import { SideMenu } from "../SideMenu";
import { LanguageButton } from "../LanguageButton";

export const Header = () => {
    const { language } = useAppSelector((state) => state.language);

    return (
        <header className="flex justify-between items-center w-fullsm:h-40 px-4 md:px-10 lg:px-20 py-12 sm:py-10 bg-primary z-50">
            <Link href="/">
                <div className="relative w-[40px] h-[38px] sm:w-[86px] sm:h-[82px]">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        fill
                        sizes="100%"
                        priority
                    />
                </div>
            </Link>
            <div className="flex justify-between gap-20">
                <ul className="hidden lg:flex md:justify-between md:gap-4 lg:gap-10">
                    {headerLinks.map((link) => (
                        <Link
                            className="text-xs p-2 border-[3px] border-transparent rounded-lg hover:border-accent active:bg-accent"
                            key={link.textEng}
                            href={link.href}
                        >
                            {language === "ua" ? link.textUkr : link.textEng}
                        </Link>
                    ))}
                </ul>
                <div className="hidden lg:flex ">
                    <LanguageButton language={language} />
                </div>
                <div className="block lg:hidden">
                    <SideMenu />
                </div>
            </div>
        </header>
    );
};
