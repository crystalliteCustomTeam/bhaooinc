import { Poppins } from "next/font/google"
import "./globals.css"
import { Footer, Header } from "../components/index"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Infiniti Media INC - Home",
  other: {
    "google-site-verification": "ujrRyYLmMXYg62fF_So99XjDyDCQZZ1VE_6n5ywDF38",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
      <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=6ece006c"></script>
    </html>
  )
}
