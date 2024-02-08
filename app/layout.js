import { Inter } from "next/font/google";
import PropTypes from "prop-types";
import Providers from "./_components/Providers";
import { ScrollProvider } from "./_components/ScrollContext";
import { ThemeProvider } from "./_components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: "Portfolio Marion Baston | Développeuse Web",
  description:
    "Je suis Marion, développeuse web et web mobile passionnée par les nouvelles technologies, j'aime expérimenter, découvrir et apprendre. Spécialisée dans les frameworks REACT.js et NEXT.js. Découvrez mes compétences et projets sur mon site web.",
  keywords: "web, developer, react, next, javascript",
  creator: "Marion Baston",
  authors: {
    name: "Marion Baston",
    url: "https://marionbaston.fr",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProvider>
            <Providers>{children}</Providers>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.string,
};
