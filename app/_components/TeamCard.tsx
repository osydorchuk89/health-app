"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { LightButton } from "./LightButton";
import { CloseIcon } from "./icons/CloseIcon";

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
    children: React.ReactNode;
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
    children,
}: TeamCardProps) => {
    const [doctorInfoDialogOpen, setDoctorInfoDialogOpen] = useState(false);

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
                    text="детальніше"
                    handleClick={() => setDoctorInfoDialogOpen(true)}
                />
                <Dialog
                    open={doctorInfoDialogOpen}
                    onClose={() => setDoctorInfoDialogOpen(false)}
                >
                    <DialogBackdrop className="fixed inset-0 bg-black/70" />
                    <div className="fixed inset-0 flex w-screen items-center justify-center">
                        <DialogPanel className="fixed flex flex-col gap-10 py-16 sm:py-10 md:py-20 px-4 sm:px-10 md:px-20 bg-white w-[90%] xl:w-[1280px] max-h-[calc(100vh_-_40px)] overflow-y-auto">
                            <CloseIcon
                                handleClick={() =>
                                    setDoctorInfoDialogOpen(false)
                                }
                            />
                            <div className="flex flex-col sm:flex-row items-start gap-8">
                                <div className="relative w-[326px] h-[489px] sm:w-[220px] sm:h-[330px] lg:w-[400px] lg:h-[600px] self-center">
                                    <Image
                                        src={photoSrc}
                                        fill
                                        alt="doctor photo"
                                        className="rounded-2xl"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-2/3">
                                    <p className="text-[38px] md:text-[40px] lg:text-2xl font-bold">
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
                            <div className="flex flex-col">{children}</div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
        </div>
    );
};
