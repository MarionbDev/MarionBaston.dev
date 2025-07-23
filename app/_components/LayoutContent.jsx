"use client";

import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import { useCurrentPathname } from "./PathnameProvider";

export default function LayoutContent({ children }) {
  const pathname = useCurrentPathname();
  const isFreelancePage = pathname.startsWith("/freelance");

  return (
    <div className="">
      {!isFreelancePage && <Navbar className="navbar" />}
      {!isFreelancePage && <NavbarMobile className="navbar-mobile" />}

      {children}

      {!isFreelancePage && <Footer />}
    </div>
  );
}
