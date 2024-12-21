interface SectionTitleProps {
    text: string;
}

export const SectionTitle = ({ text }: SectionTitleProps) => {
    return <p className="text-[40px] sm:text-[62px] md:text-3xl leading-tight">{text}</p>;
};
