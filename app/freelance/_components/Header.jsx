import React from "react";
import styles from "../styles.module.css";
import CustomLink from "./CustomLink";

export default function HeaderFree() {
  return (
    <div>
      <header className="h-[100vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-[2.2rem] md:text-[3.5rem]  font-bold leading-tight max-w-4xl">
          <span className="relative inline-block px-3">
            <span className="absolute inset-0 h-[110%] top-1/2 -translate-y-1/2 -rotate-2 bg-free_yellow -z-10 rounded-sm"></span>
            Boostez
          </span>{" "}
          votre présence en ligne avec un site performant et moderne !{" "}
        </h1>
        <p className="mt-4 text-[1.3rem] font-semibold max-w-3xl text-purple_text">
          Transformez vos visiteurs en clients.
        </p>

        <p className="mt-8 text-[1.1rem] md:text-[1.4rem] max-w-3xl text-txt_black leading-relaxed">
          Artisans, commerçants, entrepreneurs : je vous aide à gagner en
          visibilité et à attirer plus de clients grâce au marketing digital.
        </p>

        <CustomLink
          href="#me-contacter"
          className="mt-10   border-txt_black text-[1.05rem] font-medium"
        >
          Discutons de votre projet
        </CustomLink>
        <div className="flex justify-center mt-16 w-[100%]">
          <div className={styles.scroller}>
            <ul
              className={` text-[1.1rem] lg:text-[1.3rem] ${styles["tag-list"]} ${styles.scroller_inner}`}
            >
              {/* On duplique le contenu suffisamment pour éviter le "vide" en fin de défilement */}
              {[...Array(6)].map((_, index) => (
                <React.Fragment key={index}>
                  <li className="banner-slide ">Site Vitrine</li>
                  <li className="banner-slide">Landing Page</li>
                  <li className="banner-slide">Portfolio</li>
                  <li className="banner-slide">Blog</li>
                  <li className="banner-slide">Site événementiel</li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
