import "@/styles/global.css";

export const metadata = {
    title: "Sudarshan Mhasrup",
    description: "A software developer who likes to build mobile applications.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}