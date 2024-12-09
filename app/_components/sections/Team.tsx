"use client";

import { useInView } from "react-intersection-observer";

import { navigationActions } from "@/app/_store";
import { useAppDispatch } from "@/app/_store/hooks";
import { TeamCard } from "../TeamCard";

const teamArticles = [
    {
        photo: "/bohdan-photo.png",
        name: "Богдан Рудковський",
        position: "лікар-інтерніст",
    },
    {
        photo: "/yevheniya-photo.png",
        name: "Євгенія Рудковська",
        position: "психологиня",
    },
    // {
    //     photo: "/anastasiya-photo.png",
    //     name: "Анастасія Пилипенко",
    //     position: "сімейна лікарка",
    // },
    // {
    //     photo: "/tetiana-photo.png",
    //     name: "Тетяна Танасів",
    //     position: "психологиня",
    // },
];

export const Team = () => {
    const dispatch = useAppDispatch();

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && dispatch(navigationActions.change("team"));
        },
    });
    return (
        <div id="team" ref={ref} className="flex flex-col gap-10 p-20">
            <p className="text-3xl">команда</p>
            <div className="flex justify-center gap-20">
                {teamArticles.map((article) => (
                    <TeamCard
                        key={article.name}
                        photo={article.photo}
                        name={article.name}
                        position={article.position}
                    />
                ))}
            </div>
        </div>
    );
};
