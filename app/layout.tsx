import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gyan Kumar Sah - Undergraduate Researcher & Physics Student",
    description: "Personal website of Gyan Kumar Sah, an undergraduate physics student and researcher specializing in clean energy, nanomaterials, and quantum computing at SRM University, Andhra Pradesh.",
    keywords: [
        "Gyan Kumar Sah",
        "Physics Student",
        "Researcher",
        "SRM University",
        "Clean Energy",
        "Quantum Computing",
        "Nanomaterials",
        "Shakti Photon Solutions",
        "Nepal",
        "India",
    ],
    authors: [{ name: "Gyan Kumar Sah" }],
    creator: "Gyan Kumar Sah",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://gyankumarsah.com",
        title: "Gyan Kumar Sah - Undergraduate Researcher & Physics Student",
        description: "Personal website showcasing research work, projects, and achievements in physics and clean energy technologies.",
        siteName: "Gyan Kumar Sah Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gyan Kumar Sah - Undergraduate Researcher",
        description: "Undergraduate physics student and researcher specializing in clean energy and quantum computing.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="canonical" href="https://gyankumarsah.com" />
            </head>
            <body className={`${inter.className} antialiased`}>
                <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
                    <ThemeProvider>
                        <Header />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
