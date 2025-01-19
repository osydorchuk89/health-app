interface ButtonProps {
    text: string;
    additionalButtonStyle?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const LightButton = ({ text, additionalButtonStyle, handleClick }: ButtonProps) => {

    const basicButtonStyles = "rounded-lg border-[3px] border-accent hover:shadow-custom active:bg-accent ";

    return (
        <button
            className={basicButtonStyles + additionalButtonStyle}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};
