import Image from "next/image";

interface ContactCardProps {
    photo: string;
    children: React.ReactNode;
}

export const ContactCard = ({ photo, children }: ContactCardProps) => {
    return (
        <div className="flex flex-col gap-6 border-[3px] border-primary rounded-2xl p-4">
            <Image
                className="self-center"
                src={photo}
                width={24}
                height={24}
                alt="icon"
            />
            {children}
        </div>
    );
};
