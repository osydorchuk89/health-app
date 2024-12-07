import Image from "next/image";
import Link from "next/link";

export const SocialMediaBar = () => {
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

    return (
        <ul className="flex flex-col justify-between gap-14">
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
