import Image from "next/image";
import { SocialMediaBar } from "../SocialMediaBar";

export const Footer = () => {
    return (
        <footer className="flex flex-col gap-6 w-full px-20 pt-20 pb-10 bg-primary">
            <div className="flex">
                <div className="flex gap-4 items-end w-1/2">
                    <Image
                        src="/logo.png"
                        height={140}
                        width={134}
                        alt="logo"
                    />
                    <article className="flex justify-end flex-col">
                        <p className="text-accent text-4xl leading-none">
                            нескраю
                        </p>
                        <p className="text-2xl">захист здоровʼя для всіх</p>
                    </article>
                </div>
                <div className="flex justify-end items-center w-1/2">
                    <SocialMediaBar alignment="horizontal" />
                </div>
            </div>
            <div className="flex flex-col items-center text-xxs">
                <p>ФОП Рудковський Богдан Владиславович, ЄДРПОУ 3367101799</p>
                <p>
                    Ліцензія на провадчення медичної практики "Наказ МОЗ України
                    №2984 від 23.12.2020"
                </p>
            </div>
        </footer>
    );
};
