"use client";

import { useAppSelector } from "@/app/_store/hooks";
import { SectionTitle } from "../SectionTitle";
import { valuesText } from "@/app/_lib/data";

export const Values = () => {
    const { language } = useAppSelector((state) => state.language);

    return (
        <div
            id="values"
            className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-20 -scroll-mt-10"
        >
            <article className="flex flex-col gap-4 w-2/3">
                <SectionTitle
                    text={
                        language === "ua"
                            ? valuesText.titleUkr
                            : valuesText.titleEng
                    }
                />
            </article>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-5">
                {valuesText.items.map((article) => {
                    const title =
                        language === "ua" ? article.titleUkr : article.titleEng;
                    const text =
                        language === "ua" ? article.textUkr : article.textEng;
                    return (
                        <article key={title} className="flex flex-col gap-3">
                            <p className="text-lg font-bold">{title}</p>
                            <p className="text-base">{text}</p>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};
