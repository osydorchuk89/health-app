"use client";

import { useAppSelector } from "@/app/_store/hooks";
import { teamArticles } from "@/app/_lib/data";
import { TeamCard } from "../TeamCard";
import { LeftArrow, RightArrow } from "../icons/Arrows";

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
                    const additionalTitle =
                        language === "ua"
                            ? article.additionalInfoTitleUkr
                            : article.additionalInfoTitleEng;
                    const additionalInfoFirst =
                        language === "ua"
                            ? article.additionalInfoFirstUkr
                            : article.additionalInfoFirstEng;
                    const additionalInfoSecond =
                        language === "ua"
                            ? article.additionalInfoSecondUkr
                            : article.additionalInfoSecondEng;

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
                            qualificationsFirst={qualificationsFirst}
                            qualificationsSecond={qualificationsSecond}
                            experienceFirst={experienceFirst}
                            experienceSecond={experienceSecond}
                            additionalTitle={additionalTitle}
                            additionalInfoFirst={additionalInfoFirst}
                            additionalInfoSecond={additionalInfoSecond}
                        />
                    );
                })}
                <div className="absolute right-4 md:right-10 lg:right-20 top-1/2 hidden lg:block">
                    <RightArrow />
                </div>
            </div>
        </div>
    );
};
