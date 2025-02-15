import { Inter } from "next/font/google";
import PropTypes from "prop-types";
import Navbar from "./_components/Navbar";
import NavbarMobile from "./_components/NavbarMobile";
import Providers from "./_components/Providers";
import { ThemeProvider } from "./_components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: "Marion Baston | Développeuse Web - Portfolio",
  description:
    "Développeuse web et mobile passionnée par la tech, j'aime expérimenter, découvrir et apprendre. Spécialisée en REACT.js et NEXT.js. Découvrez mes compétences et projets sur mon site web.",
  keywords: ["web", "developer", "react.js", "next.js", "javascript"],
  creator: "Marion Baston",
  authors: {
    name: "Marion Baston",
    url: "https://marionbaston.fr",
  },
  alternates: {
    metadataBase: new URL("https://marionbaston.fr"),
    canonical: "https://marionbaston.fr",
  },
  icons: {
    icon: "../logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Providers>
            <div className="flex  ">
              <Navbar className="navbar " />
            </div>

            <NavbarMobile className="navbar-mobile " />

            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
