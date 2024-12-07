import { Metadata } from "next";
import { Header } from "./_components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
    title: "нескраю",
    description: "захист здоровʼя для всіх",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
