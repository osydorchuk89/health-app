import Image from "next/image";
import { LightButton } from "./LightButton";

interface TeamCardProps {
    photo: string;
    name: string;
    position: string;
}

export const TeamCard = ({ photo, name, position }: TeamCardProps) => {
    return (
        <div className="relative flex flex-col gap-3 items-start h-[450px] bg-primary rounded-3xl p-4">
            <Image src={photo} width={275} height={275} alt="doctor's photo" />
            <article className="flex flex-col gap-1">
                <p className="text-lg font-bold">{name}</p>
                <p className="text-base">{position}</p>
            </article>
            <div className="absolute bottom-4">
                <LightButton text="детальніше" />
            </div>
        </div>
    );
};
