import NavbarDeskFree from "./_components/navbar/NavbarDeskFree";
import NavbarMobFree from "./_components/navbar/NavbarMobFree";

export default function FreelanceLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <NavbarDeskFree />
        <NavbarMobFree />
        {children}
      </body>
    </html>
  );
}
