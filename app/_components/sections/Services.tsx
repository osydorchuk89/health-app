"use client";

import { useInView } from "react-intersection-observer";

import { navigationActions } from "@/app/_store";
import { useAppDispatch } from "@/app/_store/hooks";
import { ServiceCard } from "../ServiceCard";

const serviceArticles = [
    {
        title: "підписання декларації з сімейним лікарем",
        text: "тут Ви можете обрати сімейного лікаря та підписати з ним декларацію згідно пакету услуг первинної медичної допомоги від НСЗУ",
    },
    {
        title: "консультації лікаря",
        text: "тут Ви можете отримати консультацію від лікаря в будь-який спосіб (потрапити на прийом, шляхом телекомунікації, домашній візит, в позаробочий час)",
    },
    {
        title: "діагностика та профілактика",
        text: "тут Ви можете перевірити Ваш загальний стан здоровʼя (ЕКГ, перевірити зір, індекс маси тіла, глюкозу, холестерин, спірометрія та інше)",
    },
    {
        title: "консультація психолога",
        text: "тут Ви можете обрати психолога та потрапити до нього на консультацію, провести діагностику та отримати супровід",
    },
    {
        title: "проведення групових сесій",
        text: "тут Ви можете стати частиною психологічних груп з підтримки та самодопомоги (середня группа 8 людей)",
    },
    {
        title: "консалтинг та освіта",
        text: "тут Ви можете обрати нашу команду з громадського здоровʼя для проведення просвітницьких заходів, воркшопів для певної групи людей",
    },
];

export const Services = () => {
    const dispatch = useAppDispatch();

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && dispatch(navigationActions.change("services"));
        },
    });

    return (
        <div id="services" ref={ref} className="flex flex-col gap-10 p-20">
            <p className="text-3xl">які послуги ми надаємо</p>
            <div className="grid grid-cols-3 gap-5">
                <ServiceCard text="підписання декларації з сімейним лікарем" />
                <ServiceCard text="консультація лікаря" />
                <ServiceCard text="діагностика та профілактика" />
                <ServiceCard text="консультація психолога" />
                <ServiceCard text="проведення групових сесій" />
                <ServiceCard text="консалтинг та освіта" />
            </div>
        </div>
    );
};
