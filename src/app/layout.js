import Navbar from "@/components/shared/Navbar";
import "./globals.css";
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
          {/* <Navbar/> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}