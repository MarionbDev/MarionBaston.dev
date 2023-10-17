import "./globals.css";
import { Inter } from "next/font/google";
import PropTypes from "prop-types";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Marion Baston | Développeuse Web Junior",
  description:
    "Je suis Marion, développeuse web et web mobile passionnée par les nouvelles technologies, j'aime expérimenter, découvrir et apprendre. Spécialisée dans les frameworks REACT.js et NEXT.js. Découvrez mes compétences et projets sur mon site web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.string,
};
