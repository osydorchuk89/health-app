"use client";

import { useInView } from "react-intersection-observer";

import { navigationActions } from "@/app/_store";
import { useAppDispatch } from "@/app/_store/hooks";
import { valueArticles } from "@/app/_lib/data";
import { SectionTitle } from "../SectionTitle";

export const Values = () => {
    const dispatch = useAppDispatch();

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && dispatch(navigationActions.change("about"));
        },
    });

    return (
        <div
            id="values"
            ref={ref}
            className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-20 -scroll-mt-10"
        >
            <article className="flex flex-col gap-4 w-2/3">
                <SectionTitle text="цінності" />
            </article>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-5">
                {valueArticles.map((article) => (
                    <article
                        key={article.title}
                        className="flex flex-col gap-3"
                    >
                        <p className="text-lg font-bold">{article.title}</p>
                        <p className="text-base">{article.text}</p>
                    </article>
                ))}
            </div>
        </div>
    );
};
