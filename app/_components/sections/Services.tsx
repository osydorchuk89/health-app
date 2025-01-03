"use client";

import { useInView } from "react-intersection-observer";

import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { navigationActions } from "@/app/_store";
import { ServiceCard } from "../ServiceCard";
import { SectionTitle } from "../SectionTitle";
import { servicesText } from "@/app/_lib/data";

export const Services = () => {
    const dispatch = useAppDispatch();
    const { language } = useAppSelector((state) => state.language);

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && dispatch(navigationActions.change("services"));
        },
    });

    return (
        <div
            id="services"
            ref={ref}
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
