"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { navigationActions } from "@/app/_store";
import { useAppDispatch } from "@/app/_store/hooks";
import { activityArticles } from "@/app/_lib/data";
import { ActivityDialog } from "../ActivityDialog";
import { SectionTitle } from "../SectionTitle";

export const Activities = () => {
    const dispatch = useAppDispatch();

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && dispatch(navigationActions.change("about"));
        },
    });

    return (
        <div id="activities" ref={ref} className="-scroll-mt-10">
            <div className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-20">
                <SectionTitle text="наша діяльність"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-5">
                    {activityArticles.map((article) => (
                        <ActivityDialog
                            key={article.title}
                            title={article.title}
                            text={article.text}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-5 bg-accent px-4 md:px-10 lg:px-20 py-20">
                <div className="relative w-[320px] h-[230px] xs:w-[358px] xs:h-[258px] sm:w-[640px] sm:h-[462px]">
                    <Image src="/big-logo.png" fill alt="big logo" />
                </div>
                <p className="text-xxs md:text-base xl:w-2/5">
                    наш центр доступний для вас у будь-який час, коли вам
                    потрібна допомога або консультація. ми прагнемо бути поруч у
                    будь-який момент Вашого життя, щоб Ви могли завжди відчувати
                    підтримку і впевненість у своєму здоров’ї.
                </p>
            </div>
        </div>
    );
};
