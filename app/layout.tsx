import { Metadata } from "next";

import { Providers } from "./StoreProvider";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
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
        <Providers>
            <html lang="en">
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </Providers>
    );
}
