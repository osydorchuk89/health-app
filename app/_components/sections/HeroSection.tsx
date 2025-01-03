"use client";

import { useAppSelector } from "@/app/_store/hooks";
import { ContactDialog } from "../ContactDialog";
import { SocialMediaBar } from "../SocialMediaBar";
import { heroSectionText } from "@/app/_lib/data";

export const HeroSection = () => {
    const { language } = useAppSelector((state) => state.language);

    return (
        <div className="relative flex flex-col justify-between items-center bg-primary px-4 md:px-10 lg:px-20 py-20 sm:py-48 md:pt-16 md:pb-32 gap-[104px]">
            <p className="text-base absolute top-0 right-4 sm:right-10 md:right-20">
                +380992764663
            </p>
            <div className="flex justify-between">
                <div className="flex flex-col w-5/6 lg:w-2/3">
                    <p className="text-[78px] md:text-4xl text-accent leading-none">
                        {language === "ua"
                            ? heroSectionText.titleUkr
                            : heroSectionText.titleEng}
                    </p>
                    <p className="text-base sm:text-xl md:text-[40px] lg:tex-2xl mb-14 md:mb-6">
                        {language === "ua"
                            ? heroSectionText.subtitleUkr
                            : heroSectionText.subtitleEng}
                    </p>
                    <p className="text-xxs md:text-base">
                        {language === "ua"
                            ? heroSectionText.mainUkr
                            : heroSectionText.mainEng}
                    </p>
                </div>
                <div className="flex items-center sm:items-end">
                    <SocialMediaBar alignment="vertical" />
                </div>
            </div>
            <div className="flex justify-center sm:justify-start w-full">
                <ContactDialog />
            </div>
        </div>
    );
};
