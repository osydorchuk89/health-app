interface ButtonProps {
    text: string;
    // type?: "submit" | "reset" | "button" | undefined;
    // handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const LightButton = ({ text }: ButtonProps) => {
    return (
        <button className="px-4 py-1 rounded-lg text-xxs border-[3px] border-accent hover:shadow-custom active:bg-accent">
            {text}
        </button>
    );
};
