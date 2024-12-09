"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { navigationActions } from "@/app/_store";
import { useAppDispatch } from "@/app/_store/hooks";
import { ActivityDialog } from "../ActivityDialog";

const activityArticles = [
    {
        title: "медицина",
        text: "- підписання декларацій з сімейним лікарем\n- індивідуальні консультації\n- профілактика\n- консультації лікаря-інтерніста\n- онлайн-консультації\n- домашні візити\n- лабораторна та інструментальна діагностика\n- вакцинація\n- медичний супровід",
    },
    {
        title: "психологія",
        text: "- індивідуальні консультації\n- групи взаємопідтримки\n- онлайн консультації\n- надання першої психологічної допомоги\n- арт-терапія\n- тематичні групи",
    },
    {
        title: "освіта",
        text: "- практика студентів психологічного факультету\n- безперервний розвиток лікарів «групи рівних»\n- тренінги\n- воркшопи\n- івенти з профорієнтації\n- просвітницька діяльність",
    },
    {
        title: "консалтинг",
        text: "- консультування бізнесу, громадських організацій, благодійних фондів, органів самоврядування з приводу забезпечення фізичного, психічного та соціального здоров’я персоналу\n- участь доповідачем у конференціях\n- участь експертом у дискусійних панелях\n- долучення до стратегічних сесій",
    },
];
export const Activities = () => {
    const dispatch = useAppDispatch();

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && dispatch(navigationActions.change("about"));
        },
    });

    return (
        <div id="activities" ref={ref}>
            <div className="flex flex-col gap-10 p-20">
                <p className="text-3xl">наша діяльність</p>
                <div className="grid grid-cols-4 gap-5">
                    {activityArticles.map((article) => (
                        <ActivityDialog
                            key={article.title}
                            title={article.title}
                            text={article.text}
                        />
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-10 bg-accent p-20">
                <Image
                    src="/big-logo.png"
                    width={640}
                    height={462}
                    alt="big logo"
                />
                <p className="text-lg">
                    наш центр доступний для вас у будь-який час, коли вам
                    потрібна допомога або консультація. ми прагнемо бути поруч у
                    будь-який момент Вашого життя, щоб Ви могли завжди відчувати
                    підтримку і впевненість у своєму здоров’ї.
                </p>
            </div>
        </div>
    );
};
