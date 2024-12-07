import Image from "next/image";
import Link from "next/link";

const headerLinks = [
    { text: "цінності", href: "/" },
    { text: "послуги", href: "/" },
    { text: "діяльність", href: "/" },
    { text: "команда", href: "/" },
    { text: "контакти", href: "/" },
];

export const Header = () => {
    return (
        <header className="sticky flex justify-between items-center w-full px-20 py-10 bg-primary">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={86} height={82} />
            </Link>
            <div className="flex justify-between gap-20">
                <ul className="flex justify-between gap-10">
                    {headerLinks.map((link) => (
                        <Link
                            className="text-xs"
                            key={link.text}
                            href={link.href}
                        >
                            {link.text}
                        </Link>
                    ))}
                </ul>
                <Link className="text-xs" href="/">
                    en
                </Link>
            </div>
            <p className="text-base absolute bottom-0 right-20">
                +380992764663
            </p>
        </header>
    );
};
