"use client";

import { useAppSelector } from "@/app/_store/hooks";
import { ServiceCard } from "../ServiceCard";
import { SectionTitle } from "../SectionTitle";
import { servicesText } from "@/app/_lib/data";

export const Services = () => {
    const { language } = useAppSelector((state) => state.language);

    return (
        <div
            id="services"
            className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-20 -scroll-mt-10"
        >
            <SectionTitle
                text={
                    language === "ua"
                        ? servicesText.titleUkr
                        : servicesText.titleEng
                }
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-5">
                {servicesText.items.map((item) => (
                    <ServiceCard
                        key={item.eng}
                        text={language === "ua" ? item.ukr : item.eng}
                    />
                ))}
            </div>
        </div>
    );
};
