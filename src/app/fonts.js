import { Poppins as FontSans, Space_Grotesk as FontMono } from "next/font/google"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
    display: "swap",
})

const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal"],
    display: "swap",
})

export { fontSans, fontMono }