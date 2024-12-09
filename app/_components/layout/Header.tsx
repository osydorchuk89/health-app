import Image from "next/image";
import Link from "next/link";

const headerLinks = [
    { text: "цінності", href: "#values" },
    { text: "послуги", href: "#services" },
    { text: "діяльність", href: "#activities" },
    { text: "команда", href: "#team" },
    { text: "контакти", href: "#contacts" },
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
        </header>
    );
};
