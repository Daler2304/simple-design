import type { Metadata, Viewport } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const montserratAlternates = Montserrat_Alternates({
    subsets: ["cyrillic", "latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat-alternates",
});

export const metadata: Metadata = {
    title: "Simple Design – дизайн интерьера",
    description:
        "Simple Design — создание стильных и функциональных интерьеров, разработка дизайн-проектов и оформление пространства под ваш образ жизни.",
};

export const viewport: Viewport = {
    initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="ru" className={`${montserratAlternates.variable} h-full `}>
            <body className="min-h-full flex flex-col font-montserrat">{children}</body>
        </html>
    );
}
