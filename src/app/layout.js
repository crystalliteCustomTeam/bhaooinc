// fonts
import { Footer, Header } from "@/components";
import { fontSans } from "./fonts"
// css
import "./globals.css";
//
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Bhaoo INC - Empowering Your Digital Transformation Journey",
  description: "Bhaoo INC - Empowering Your Digital Transformation Journey",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("scroll-smooth", fontSans.variable)}>
        <Header />
        <main className="relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
