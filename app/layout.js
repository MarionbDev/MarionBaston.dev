import "./globals.css";
import { Inter } from "next/font/google";
import PropTypes from "prop-types";
import Providers from "./_components/Providers";
import { ScrollProvider } from "./_components/ScrollContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Marion Baston | Développeuse Web Junior",
  description:
    "Je suis Marion, développeuse web et web mobile passionnée par les nouvelles technologies, j'aime expérimenter, découvrir et apprendre. Spécialisée dans les frameworks REACT.js et NEXT.js. Découvrez mes compétences et projets sur mon site web.",
  keyboards: "web, developer, react, next, javascript",
  creator: "Marion Baston",
  authors: {
    name: "Marion Baston",
    url: "https://marionbaston.fr",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" min-w-min">
      <Head>
        <title>Marion Baston</title>
      </Head>
      <body className={inter.className}>
        <ScrollProvider>
          <Providers>{children}</Providers>
        </ScrollProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.string,
};
