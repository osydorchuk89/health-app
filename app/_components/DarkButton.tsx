interface ButtonProps {
    text: string;
    // type?: "submit" | "reset" | "button" | undefined;
    // handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text }: ButtonProps) => {
    return (
        <button className="bg-accent px-8 py-3 rounded-xl text-sm">
            {text}
        </button>
    );
};
