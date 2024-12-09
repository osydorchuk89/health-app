interface ServiceCardProps {
    text: string;
}

export const ServiceCard = ({ text }: ServiceCardProps) => {
    return (
        <div className="flex justify-center items-center bg-primary rounded-2xl px-6 py-12 h-36">
            <p className="text-lg text-center">{text}</p>
        </div>
    );
};
