import { ContactDialog } from "../ContactDialog";
import { DarkButton } from "../DarkButton";
import { SocialMediaBar } from "../SocialMediaBar";

export const HeroSection = () => {
    return (
        <div className="relative h-[600px] flex justify-between items-center bg-primary px-20">
            <p className="text-base absolute top-0 right-20">+380992764663</p>
            <div className="flex flex-col w-2/3">
                <p className="text-4xl text-accent leading-none">нескраю</p>
                <p className="text-2xl mb-6">медико-психологічний хаб</p>
                <p className="text-base mb-[104px]">
                    здоров’я та добробут – це не просто слова, а ключові
                    цінності, які впливають на наше щоденне життя та
                    продуктивність. Саме тому ми створили центр, який є
                    невід'ємною частиною нашої корпоративної культури та підходу
                    роботи з клієнтами. Цей центр – це не лише місце, де ви
                    можете отримати допомогу, але й символ нашої турботи та
                    підтримки.
                </p>
                <div className="flex justify-start">
                    {/* <DarkButton text="консультація" /> */}
                    <ContactDialog />
                </div>
            </div>
            <SocialMediaBar alignment="vertical" />
        </div>
    );
};
