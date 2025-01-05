"use client";

import Image from "next/image";

import { useAppSelector } from "@/app/_store/hooks";
import { activitiesText, activityArticles } from "@/app/_lib/data";
import { ActivityDialog } from "../ActivityDialog";
import { SectionTitle } from "../SectionTitle";

export const Activities = () => {
    const { language } = useAppSelector((state) => state.language);

    return (
        <div id="activities" className="-scroll-mt-10">
            <div className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-20">
                <SectionTitle
                    text={
                        language === "ua"
                            ? activitiesText.titleUkr
                            : activitiesText.titleEng
                    }
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-5">
                    {activityArticles.map((article) => (
                        <ActivityDialog
                            key={article.titleEng}
                            title={
                                language === "ua"
                                    ? article.titleUkr
                                    : article.titleEng
                            }
                            text={
                                language === "ua"
                                    ? article.textUkr
                                    : article.textEng
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-5 bg-accent px-4 md:px-10 lg:px-20 py-20">
                <div className="flex justify-center xl:w-1/2">
                    <div className="relative w-[320px] h-[230px] xs:w-[358px] xs:h-[258px] sm:w-[640px] sm:h-[462px]">
                        <Image src="/big-logo.png" fill alt="big logo" />
                    </div>
                </div>
                <p className="text-xxs md:text-base xl:w-1/2">
                    {language === "ua"
                        ? activitiesText.mainUkr
                        : activitiesText.mainEng}
                </p>
            </div>
        </div>
    );
};
