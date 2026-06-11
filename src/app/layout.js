import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
// import { ThemeProvider } from "./providers/theame-provider";

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        {/* <ThemeProvider> */}

        {/* ── NAV ── */}
        <Navbar />

        {children}

        {/* ── FOOTER ── */}
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}