"use client";

import Image from "next/image";

import { SocialMediaBar } from "../SocialMediaBar";
import { useAppSelector } from "@/app/_store/hooks";
import { footerText } from "@/app/_lib/data";

export const Footer = () => {
    const { language } = useAppSelector((state) => state.language);

    return (
        <footer className="flex flex-col gap-6 w-full px-4 md:px-10 lg:px-20 pt-20 pb-10 bg-primary">
            <div className="flex flex-col gap-10 xl:flex-row items-center">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center xl:justify-start w-full xl:w-2/3">
                    <Image
                        src="/logo.png"
                        height={140}
                        width={134}
                        alt="logo"
                        priority
                    />
                    <article className="flex justify-end flex-col">
                        <p className="text-accent text-[78px] md:text-4xl leading-none">
                            {language === "ua"
                                ? footerText.titleUkr
                                : footerText.titleEng}
                        </p>
                        <p className="text-[24px] md:text-xl lg:text-2xl">
                            {language === "ua"
                                ? footerText.subtitleUkr
                                : footerText.subtitleEng}
                        </p>
                    </article>
                </div>
                <div className="flex justify-center xl:justify-end items-center w-full xl:w-1/3">
                    <SocialMediaBar alignment="horizontal" />
                </div>
            </div>
            <div className="flex flex-col items-center text-xxs">
                <p className="text-center">
                    {language === "ua" ? footerText.fopFirstUkr : footerText.fopFirstEng}
                </p>
                <p className="text-center">
                    {language === "ua" ? footerText.fopSecondUkr : footerText.fopSecondEng}
                </p>
                <p className="text-center">
                    {language === "ua"
                        ? footerText.licenseUkr
                        : footerText.licenseEng}
                </p>
            </div>
        </footer>
    );
};
