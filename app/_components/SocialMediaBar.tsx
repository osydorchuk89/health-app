import Image from "next/image";
import Link from "next/link";

interface SocialMediaBarProps {
    alignment: string;
}

export const SocialMediaBar = ({ alignment }: SocialMediaBarProps) => {
    const socialMediaLinks = [
        {
            src: "/telegram.png",
            href: "/",
            alt: "Telegram link",
        },
        {
            src: "/instagram.png",
            href: "/",
            alt: "Instagram link",
        },
        {
            src: "/youtube.png",
            href: "/",
            alt: "YouTube link",
        },
    ];

    const style =
        alignment === "vertical"
            ? "flex flex-col justify-between gap-14"
            : "flex justify-between gap-14";

    return (
        <ul className={style}>
            {socialMediaLinks.map((link) => (
                <Link key={link.src} href={link.href}>
                    <Image
                        src={link.src}
                        alt={link.alt}
                        width={24}
                        height={24}
                    />
                </Link>
            ))}
        </ul>
    );
};
