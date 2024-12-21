import Image from "next/image";
import { SocialMediaBar } from "../SocialMediaBar";

export const Footer = () => {
    return (
        <footer className="flex flex-col gap-6 w-full px-4 md:px-10 lg:px-20 pt-20 pb-10 bg-primary">
            <div className="flex flex-col gap-10 xl:flex-row items-center">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full xl:w-2/3">
                    <Image
                        src="/logo.png"
                        height={140}
                        width={134}
                        alt="logo"
                        priority
                    />
                    <article className="flex justify-end flex-col">
                        <p className="text-accent text-[78px] md:text-4xl leading-none">
                            нескраю
                        </p>
                        <p className="text-[24px] md:text-xl lg:text-2xl">
                            медико-психологічний хаб
                        </p>
                    </article>
                </div>
                <div className="flex justify-center xl:justify-end items-center w-full xl:w-1/3">
                    <SocialMediaBar alignment="horizontal" />
                </div>
            </div>
            <div className="flex flex-col items-center text-xxs">
                <p className="text-center">
                    ФОП Рудковський Богдан Владиславович, ЄДРПОУ 3367101799
                </p>
                <p className="text-center">
                    Ліцензія на провадчення медичної практики "Наказ МОЗ України
                    №2984 від 23.12.2020"
                </p>
            </div>
        </footer>
    );
};
