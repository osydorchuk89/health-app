"use client";

import { useAppSelector } from "@/app/_store/hooks";
import { teamArticles } from "@/app/_lib/data";
import { TeamCard } from "../TeamCard";
import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";

export const Team = () => {
    const { language } = useAppSelector((state) => state.language);

    return (
        <div
            id="team"
            className="relative flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-20 -scroll-mt-10"
        >
            <p className="text-[40px] sm:text-[62px] md:text-3xl">
                {language === "ua" ? "команда" : "team"}
            </p>
            <div className="absolute left-4 md:left-10 lg:left-20 top-1/2 hidden lg:block">
                <LeftArrow />
            </div>
            <div className="flex justify-start md:justify-evenly lg:justify-center flex-nowrap gap-9 md:gap-10 lg:gap-20 overflow-x-auto">
                {teamArticles.map((article) => {
                    const qualificationsFirst =
                        language === "ua"
                            ? article.qualificationsFirstUkr
                            : article.qualificationsFirstEng;
                    const qualificationsSecond =
                        language === "ua"
                            ? article.qualificationsSecondUkr
                            : article.qualificationsSecondEng;
                    const experienceFirst =
                        language === "ua"
                            ? article.experienceFirstUkr
                            : article.experienceFirstEng;
                    const experienceSecond =
                        language === "ua"
                            ? article.experienceSecondUkr
                            : article.experienceSecondEng;
                    const additionalExperienceFirst =
                        language === "ua"
                            ? article.additionalExperienceFirstUkr
                            : article.additionalExperienceFirstEng;
                    const additionalExperienceSecond =
                        language === "ua"
                            ? article.additionalExperienceSecondUkr
                            : article.additionalExperienceSecondEng;

                    return (
                        <TeamCard
                            key={article.nameEng}
                            photo={article.photo}
                            name={
                                language === "ua"
                                    ? article.nameUkr
                                    : article.nameEng
                            }
                            position={
                                language === "ua"
                                    ? article.positionUkr
                                    : article.positionEng
                            }
                            title={
                                language === "ua"
                                    ? article.titleUkr
                                    : article.titleEng
                            }
                            motto={
                                language === "ua"
                                    ? article.mottoUkr
                                    : article.mottoEng
                            }
                            education={
                                language === "ua"
                                    ? article.educationUkr
                                    : article.educationEng
                            }
                            specialization={
                                language === "ua"
                                    ? article.specializationUkr
                                    : article.specializationEng
                            }
                            method={
                                language === "ua"
                                    ? article.methodUkr
                                    : article.methodEng
                            }
                            photoSrc={article.photoSrc}
                            logoSrc={article.logoSrc}
                            logoWidth={article.logoWidth}
                            logoHeight={article.logoHeight}
                        >
                            <div className="flex flex-col gap-20">
                                <div className="flex flex-col gap-6">
                                    <p className="text-[40px] sm:text-[62px] md:text-3xl leading-none">
                                        {language === "ua"
                                            ? "підвищення кваліфікації та компетенцій"
                                            : "improving skills and competencies"}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 ml-5">
                                        <ul className="list-disc">
                                            {qualificationsFirst.map(
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
                                            {qualificationsSecond.map(
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
                                        {language === "ua"
                                            ? article.experienceTitleUkr
                                            : article.experienceTitleEng}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 ml-5">
                                        <ul className="list-disc">
                                            {experienceFirst.map(
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
                                            {experienceSecond.map(
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
                                {article.additionalExperience && (
                                    <div className="flex flex-col gap-6">
                                        <p className="text-[40px] sm:text-[62px] md:text-3xl leading-none">
                                            {language === "ua"
                                                ? article.additionalExperienceTitleUkr
                                                : article.additionalExperienceTitleEng}
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 ml-5">
                                            <ul className="list-disc">
                                                {additionalExperienceFirst!.map(
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
                                                {additionalExperienceSecond!.map(
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
                    );
                })}
                <div className="absolute right-4 md:right-10 lg:right-20 top-1/2 hidden lg:block">
                    <RightArrow />
                </div>
            </div>
        </div>
    );
};
