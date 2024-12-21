"use client";

import { useInView } from "react-intersection-observer";

import { navigationActions } from "@/app/_store";
import { useAppDispatch } from "@/app/_store/hooks";
import { ServiceCard } from "../ServiceCard";
import { SectionTitle } from "../SectionTitle";

export const Services = () => {
    const dispatch = useAppDispatch();

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
            <SectionTitle text="які послуги ми надаємо"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-5">
                <ServiceCard text="підписання декларації з сімейним лікарем" />
                <ServiceCard text="консультація лікаря" />
                <ServiceCard text="діагностика та профілактика" />
                <ServiceCard text="консультація психолога" />
                <ServiceCard text="проведення групових сесій" />
                <ServiceCard text="консалтинг та освіта" />
            </div>
        </div>
    );
};
