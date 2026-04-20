import { Inter, Sora } from "next/font/google";
import "./globals.css";
import ThreeDBackground from "../components/ThreeDBackground";
import LoadingScreen from "../components/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Rishika Arisetty - Portfolio",
  description: "Personal portfolio of Rishika Arisetty, AI/ML & Full Stack Developer",
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col text-foreground font-sans">
        <LoadingScreen />
        <ThreeDBackground />
        {children}
      </body>
    </html>
  );
}
