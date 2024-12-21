import {
    InstagramIcon,
    TelegramIcon,
    YoutubeIcon,
} from "./icons/SocialMediaIcons";

interface SocialMediaBarProps {
    alignment: string;
}

export const SocialMediaBar = ({ alignment }: SocialMediaBarProps) => {
    const style =
        alignment === "vertical"
            ? "flex flex-col justify-between gap-14"
            : "flex justify-between gap-14";

    return (
        <ul className={style}>
            <TelegramIcon />
            <InstagramIcon />
            <YoutubeIcon />
        </ul>
    );
};
