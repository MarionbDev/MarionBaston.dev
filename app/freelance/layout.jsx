import FooterFree from "./_components/Footer";
import NavbarDeskFree from "./_components/navbar/NavbarDeskFree";
import NavbarMobFree from "./_components/navbar/NavbarMobFree";

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title:
    "Marion Baston | Développeuse Web Freelance - Sites modernes & performants",
  description:
    "Développeuse web freelance spécialisée en React.js et Next.js. Création de sites modernes, rapides et optimisés SEO pour booster votre visibilité. Besoin d’un site sur-mesure ? Contactez-moi !",
  keywords: [
    "développeuse web freelance",
    "création site web",
    "création site internet professionnel",
    "React.js",
    "Next.js",
    "SEO",
    "performance web",
    "site sur-mesure",
    "optimisation SEO",
    "développement web",
    "freelance tech",
    "site vitrine",
    "site e-commerce",
    "refonte site web",
    "développement sur-mesure",
    "freelance React",
    "développeuse web indépendante",
  ],

  creator: "Marion Baston",
  authors: {
    name: "Marion Baston",
    url: "https://marionbaston.fr/freelance",
  },
  alternates: {
    metadataBase: new URL("https://marionbaston.fr/freelance"),
    canonical: "https://marionbaston.fr/freelance",
  },
  icons: {
    icon: "../../logo-bw.png",
  },
  openGraph: {
    title: "Marion Baston | Développeuse Web Freelance",
    description:
      "Spécialisée en React.js et Next.js, je crée des sites web performants et optimisés SEO. Besoin d’un site moderne et rapide ? Contactez-moi !",
    url: "https://marionbaston.fr/freelance",
    type: "website",
    images: [
      {
        url: "https://marionbaston.fr/freelance/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marion Baston - Développeuse Web Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marion Baston | Développeuse Web Freelance",
    description:
      "Création de sites web modernes, rapides et optimisés SEO. Spécialisée en React.js et Next.js.",
    images: ["https://marionbaston.fr/freelance/og-image.jpg"],
  },
};

export default function FreelanceLayout({ children }) {
  return (
    <div className="">
      <NavbarDeskFree />

      <NavbarMobFree />
      {children}
      <FooterFree />
    </div>
  );
}
