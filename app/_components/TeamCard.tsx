"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { useAppSelector } from "../_store/hooks";
import { LightButton } from "./LightButton";
import { CloseIcon } from "./icons/CloseIcon";
import { DarkButton } from "./DarkButton";

interface TeamCardProps {
    photo: string;
    name: string;
    position: string;
    title: string;
    motto: string;
    education: string;
    specialization: string;
    method: string | null;
    photoSrc: string;
    logoSrc: string;
    logoWidth: number;
    logoHeight: number;
    qualificationsFirst: string[];
    qualificationsSecond: string[];
    experienceFirst: string[];
    experienceSecond: string[];
    additionalTitle: string;
    additionalInfoFirst: string[];
    additionalInfoSecond: string[];
}

export const TeamCard = ({
    photo,
    name,
    position,
    title,
    motto,
    education,
    specialization,
    method,
    photoSrc,
    logoSrc,
    logoWidth,
    logoHeight,
    qualificationsFirst,
    qualificationsSecond,
    experienceFirst,
    experienceSecond,
    additionalTitle,
    additionalInfoFirst,
    additionalInfoSecond,
}: TeamCardProps) => {
    const [doctorInfoDialogOpen, setDoctorInfoDialogOpen] = useState(false);
    const { language } = useAppSelector((store) => store.language);

    return (
        <div className="relative flex flex-col gap-3 items-start min-w-[310px] h-[450px] bg-primary rounded-3xl p-4">
            <Image
                src={photo}
                width={275}
                height={275}
                alt="doctor's photo"
                className="rounded-lg"
            />
            <article className="flex flex-col gap-1">
                <p className="text-lg font-bold">{name}</p>
                <p className="text-base">{position}</p>
            </article>
            <div className="absolute bottom-4">
                <LightButton
                    text={language === "ua" ? "детальніше" : "read more"}
                    additionalButtonStyle="px-4 py-1 text-xxs"
                    handleClick={() => setDoctorInfoDialogOpen(true)}
                />
                <Dialog
                    open={doctorInfoDialogOpen}
                    onClose={() => setDoctorInfoDialogOpen(false)}
                >
                    <DialogBackdrop className="fixed inset-0 bg-black/70" />
                    <div className="fixed inset-0 flex w-screen items-center justify-center">
                        <DialogPanel className="fixed flex flex-col gap-10 py-16 sm:py-12 px-4 sm:px-10 md:px-20 bg-white w-[90%] xl:w-[1280px] max-h-[calc(100vh_-_40px)] overflow-y-auto rounded-2xl">
                            <div className="flex flex-col sm:flex-row items-start gap-8">
                                <CloseIcon
                                    handleClick={() =>
                                        setDoctorInfoDialogOpen(false)
                                    }
                                />
                                <div className="relative w-[300px] h-[450px] sm:w-[220px] sm:h-[330px] lg:w-[400px] lg:h-[600px]">
                                    <Image
                                        src={photoSrc}
                                        fill
                                        alt="doctor photo"
                                        className="rounded-2xl"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-5/12 xl:w-2/3">
                                    <p className="text-[38px] md:text-[40px] lg:text-2xl font-bold leading-none">
                                        {title.toUpperCase()}
                                    </p>
                                    <p className="text-[38px] md:text-[40px] lg:text-2xl font-bold mb-2">
                                        {name.toUpperCase()}
                                    </p>
                                    <div className="flex flex-col py-4">
                                        <p className="text-base mb-4">
                                            {motto}
                                        </p>
                                        <p className="text-lg font-bold">
                                            освіта
                                        </p>
                                        <p className="text-base mb-4">
                                            {education}
                                        </p>
                                        <p className="text-lg font-bold">
                                            спеціалізація
                                        </p>
                                        <p className="text-base">
                                            {specialization}
                                        </p>
                                        {method && (
                                            <div className="my-4">
                                                <p className="text-lg font-bold">
                                                    метод праці
                                                </p>
                                                <p className="text-base">
                                                    {method}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <Image
                                        src={logoSrc}
                                        width={logoWidth}
                                        height={logoHeight}
                                        alt="professional logo"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
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
                                                ? "професійний досвід"
                                                : "professional experience"}
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
                                    <div className="flex flex-col gap-6">
                                        <p className="text-[40px] sm:text-[62px] md:text-3xl leading-none">
                                            {additionalTitle}
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 ml-5">
                                            <ul className="list-disc">
                                                {additionalInfoFirst.map(
                                                    (info) => (
                                                        <li
                                                            className="text-base"
                                                            key={info}
                                                        >
                                                            {info}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                            <ul className="list-disc">
                                                {additionalInfoSecond.map(
                                                    (info) => (
                                                        <li
                                                            className="text-base"
                                                            key={info}
                                                        >
                                                            {info}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <DarkButton
                                    text={
                                        language === "ua" ? "закрити" : "close"
                                    }
                                    handleClick={() =>
                                        setDoctorInfoDialogOpen(false)
                                    }
                                />
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
        </div>
    );
};
