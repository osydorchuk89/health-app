import { ContactDialog } from "../ContactDialog";
import { SocialMediaBar } from "../SocialMediaBar";

export const HeroSection = () => {
    return (
        <div className="relative flex flex-col justify-between items-center bg-primary px-4 md:px-10 lg:px-20 py-20 sm:py-48 md:pt-16 md:pb-32 gap-[104px]">
            <p className="text-base absolute top-0 right-4 sm:right-10 md:right-20">
                +380992764663
            </p>
            <div className="flex justify-between">
                <div className="flex flex-col w-5/6 lg:w-2/3">
                    <p className="text-[78px] md:text-4xl text-accent leading-none">
                        нескраю
                    </p>
                    <p className="text-base sm:text-xl md:text-[40px] lg:tex-2xl mb-14 md:mb-6">
                        медико-психологічний хаб
                    </p>
                    <p className="text-xxs md:text-base">
                        здоров’я та добробут – це не просто слова, а ключові
                        цінності, які впливають на наше щоденне життя та
                        продуктивність. Саме тому ми створили центр, який є
                        невід'ємною частиною нашої корпоративної культури та
                        підходу роботи з клієнтами. Цей центр – це не лише
                        місце, де ви можете отримати допомогу, але й символ
                        нашої турботи та підтримки.
                    </p>
                </div>
                <div className="flex items-center sm:items-end">
                    <SocialMediaBar alignment="vertical" />
                </div>
            </div>
            <div className="flex justify-center sm:justify-start w-full">
                <ContactDialog />
            </div>
        </div>
    );
};
