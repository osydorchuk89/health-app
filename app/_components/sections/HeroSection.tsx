import { Button } from "../Button";
import { SocialMediaBar } from "../SocialMediaBar";

export const HeroSection = () => {
    return (
        <div className="h-[600px] flex justify-between items-center bg-primary px-20">
            <div className="flex flex-col">
                <p className="text-4xl text-accent">нескраю</p>
                <p className="text-2xl mb-[104px]">захист здоровʼя для всіх</p>
                <div className="flex justify-start">
                    <Button text="консультація" />
                </div>
            </div>
            <SocialMediaBar />
        </div>
    );
};
