import { Metadata } from "next";
import { Header } from "./_components/layout/Header";
import "./globals.css";
import { Footer } from "./_components/layout/Footer";

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
                <Footer />
            </body>
        </html>
    );
}
