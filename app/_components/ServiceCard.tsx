import { LightButton } from "./LightButton";

interface ServiceCardProps {
    title: string;
    text: string;
}

export const ServiceCard = ({ title, text }: ServiceCardProps) => {
    return (
        <div className="relative flex flex-col bg-primary h-[300px] rounded-3xl p-4">
            <article className="flex flex-col gap-3">
                <p className="text-xl font-bold">{title}</p>
                <p className="text-base">{text}</p>
            </article>
            <div className="absolute bottom-4">
                <LightButton text="детальніше" />
            </div>
        </div>
    );
};
