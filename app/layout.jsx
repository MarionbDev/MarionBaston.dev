import { Inter } from "next/font/google";
import PropTypes from "prop-types";
import LayoutContent from "./_components/LayoutContent";
import { PathnameProvider } from "./_components/PathnameProvider";
import Providers from "./_components/Providers";
import { ThemeProvider } from "./_components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: "Développeuse Web  | React & Next.js - Marion Baston",
  description:
    "Développeuse web spécialisée en React.js et Next.js, je suis en recherche active d’un CDD ou CDI. Découvrez mon portfolio et mes réalisations.",
  keywords: [
    "développeuse web",
    "frontend developer",
    "React.js",
    "Next.js",
    "JavaScript",
    "optimisation web",
    "freelance",
    "CDI",
    "offre emploi développeur web",
    "développeur Next.js",
    "développement frontend",
    "UX/UI",
    "SEO",
    "performance web",
    "accessibilité web",
  ],

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
    icon: "../mbLogo.png",
  },
  openGraph: {
    title: "Développeuse Web | React & Next.js - Marion Baston",
    description:
      "Développeuse web spécialisée en React.js et Next.js, je suis en recherche active d’un CDD ou CDI. Découvrez mon portfolio et mes réalisations.",
    url: "https://marionbaston.fr",
    type: "profile",
    images: [
      {
        url: "https://marionbaston.fr/og-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Marion Baston - Développeuse Web Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeuse Web | React & Next.js - Marion Baston",
    description:
      "Développeuse web spécialisée en React.js et Next.js, je suis en recherche active d’un CDD ou CDI. Découvrez mon portfolio et mes réalisations.",
    images: ["https://marionbaston.fr/og-profile.jpg"],
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
            <PathnameProvider>
              <LayoutContent>{children}</LayoutContent>
            </PathnameProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
