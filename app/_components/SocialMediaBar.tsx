import Link from "next/link";
import {
    FacebookIcon,
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
            <Link href="https://t.me/nezkrayu" target="_blank">
                <TelegramIcon />
            </Link>
            <Link
                href="https://www.facebook.com/profile.php?id=61566037723088&locale=uk_UA"
                target="_blank"
            >
                <FacebookIcon />
            </Link>
            <Link href="https://www.instagram.com/nezkrayu" target="_blank">
                <InstagramIcon />
            </Link>
            <Link
                href="https://youtube.com/@nezkrayu?si=OQRriqQtya_5SM5J"
                target="_blank"
            >
                <YoutubeIcon />
            </Link>
        </ul>
    );
};
