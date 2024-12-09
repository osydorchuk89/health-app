interface ButtonProps {
    text: string;
    // type?: "submit" | "reset" | "button" | undefined;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const DarkButton = ({ text, handleClick }: ButtonProps) => {
    return (
        <button
            className="bg-accent px-8 py-3 rounded-xl text-sm font-semibold hover:shadow-light active:shadow-dark"
            onClick={handleClick}
        >
            {text}
        </button>
    );
};
