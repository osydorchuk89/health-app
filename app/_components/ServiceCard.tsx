interface ServiceCardProps {
    text: string;
}

export const ServiceCard = ({ text }: ServiceCardProps) => {
    return (
        <div className="flex justify-center items-center bg-primary rounded-2xl px-6 h-24 sm:h-36">
            <p className="text-lg font-medium text-center">{text}</p>
        </div>
    );
};
