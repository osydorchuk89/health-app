interface ActivityCardProps {
    title: string;
    handleClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const ActivityCard = ({ title, handleClick }: ActivityCardProps) => {
    return (
        <div
            className="flex justify-center items-center border-[3px] border-accent rounded-2xl px-6 py-12 h-36 cursor-pointer hover:shadow-custom active:shadow-custom active:bg-accent"
            onClick={handleClick}
        >
            <p className="text-lg text-center">{title}</p>
        </div>
    );
};
