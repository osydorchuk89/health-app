"use client";

import { useInView } from "react-intersection-observer";

import { navigationActions } from "@/app/_store";
import { useAppDispatch } from "@/app/_store/hooks";
import { teamArticles } from "@/app/_lib/data";
import { TeamCard } from "../TeamCard";
import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";

export const Team = () => {
    const dispatch = useAppDispatch();

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && dispatch(navigationActions.change("team"));
        },
    });
    return (
        <div
            id="team"
            ref={ref}
            className="relative flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-20 -scroll-mt-10"
        >
            <p className="text-[40px] sm:text-[62px] md:text-3xl">команда</p>
            <div className="absolute left-4 md:left-10 lg:left-20 top-1/2 hidden lg:block">
                <LeftArrow />
            </div>
            <div className="flex justify-evenly lg:justify-center flex-nowrap gap-10 lg:gap-20 overflow-x-auto">
                {teamArticles.map((article) => (
                    <TeamCard
                        key={article.name}
                        photo={article.photo}
                        name={article.name}
                        position={article.position}
                        title={article.title}
                        motto={article.motto}
                        education={article.education}
                        specialization={article.specialization}
                        method={article.method}
                        photoSrc={article.photoSrc}
                        logoSrc={article.logoSrc}
                        logoWidth={article.logoWidth}
                        logoHeight={article.logoHeight}
                    >
                        <div className="flex flex-col gap-20">
                            <div className="flex flex-col gap-6">
                                <p className="text-[40px] sm:text-[62px] md:text-3xl leading-none">
                                    підвищення кваліфікації та компетенцій
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 ml-5">
                                    <ul className="list-disc">
                                        {article.qualificationsFirst.map(
                                            (qualification) => (
                                                <li
                                                    className="text-base"
                                                    key={qualification}
                                                >
                                                    {qualification}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <ul className="list-disc">
                                        {article.qualificationsSecond.map(
                                            (qualification) => (
                                                <li
                                                    className="text-base"
                                                    key={qualification}
                                                >
                                                    {qualification}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <p className="text-[40px] sm:text-[62px] md:text-3xl leading-none">
                                    {article.experienceTitle}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 ml-5">
                                    <ul className="list-disc">
                                        {article.experienceFirst.map(
                                            (experience) => (
                                                <li
                                                    className="text-base"
                                                    key={experience}
                                                >
                                                    {experience}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <ul className="list-disc">
                                        {article.experienceSecond.map(
                                            (experience) => (
                                                <li
                                                    className="text-base"
                                                    key={experience}
                                                >
                                                    {experience}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                            {article.additionalExperienceTitle && (
                                <div className="flex flex-col gap-6">
                                    <p className="text-[40px] sm:text-[62px] md:text-3xl leading-none">
                                        {article.additionalExperienceTitle}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 ml-5">
                                        <ul className="list-disc">
                                            {article.additionalExperienceFirst.map(
                                                (experience) => (
                                                    <li
                                                        className="text-base"
                                                        key={experience}
                                                    >
                                                        {experience}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <ul className="list-disc">
                                            {article.additionalExperienceSecond.map(
                                                (experience) => (
                                                    <li
                                                        className="text-base"
                                                        key={experience}
                                                    >
                                                        {experience}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </TeamCard>
                ))}
                <div className="absolute right-4 md:right-10 lg:right-20 top-1/2 hidden lg:block">
                    <RightArrow />
                </div>
            </div>
        </div>
    );
};
