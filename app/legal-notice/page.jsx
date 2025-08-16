import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegalNoticePage() {
  return (
    <>
      <div className="container font-poppins text-txt_black dark:text-white mx-auto mt-20 py-8 flex flex-col gap-8 mb-8 leading-7 text-pretty">
        <h1 className="text-4xl font-bold">Mentions légales</h1>
        <Button
          className="gap-2 w-fit border-2 rounded-full border-black/40 shadow-inner shadow-free_grey hover:bg-free_grey dark:bg-white/10 dark:hover:bg-white/50 duration-300 ease-in-out "
          asChild
        >
          <Link href="/">
            <ArrowLeft size="16" />
            Retour au site
          </Link>
        </Button>
        <div className=" max-w-[900px] flex flex-col gap-14 mx-auto">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-balances">
              1 - Édition du site
            </h2>
            <p>
              <span className="mr-1">
                En vertu de l&apos;article 6 de la loi n°2004-575 du 21 juin
                2004 pour la confiance dans l&apos;économie numérique, il est
                précisé aux utilisateurs du site internet
              </span>
              <Link
                className="text-blue-500 hover:underline"
                href="https://marionbaston.fr "
              >
                https://marionbaston.fr
              </Link>
              <span>
                {" "}
                l&apos;identité des différents intervenants dans le cadre de sa
                réalisation et de son suivi:
              </span>
            </p>
            <p>
              <span className="font-semibold">Propriétaire du site:</span>{" "}
              Marion Baston - Contact : contact@marionbaston.fr
            </p>
            <p>
              <span className="font-semibold">
                Directeur de la publication:
              </span>{" "}
              Marion Baston - Contact : contact@marionbaston.fr
            </p>
            <p>
              <span className="font-semibold">
                Délégué à la protection des données:
              </span>{" "}
              Marion Baston - Contact : contact@marionbaston.fr
            </p>
            <p>
              <span className="font-semibold">Hébergeur:</span> Vercel Inc. 440
              N Barranca Ave #4133 Covina, CA 91723
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-balance">
              2 - Propriété intellectuelle et contrefaçons.
            </h2>
            <p className="mb-2">
              <span className="mr-1">Le code source du site web est sous</span>
              <Link
                className="text-blue-500 hover:underline"
                href="https://github.com/MarionbDev/MarionBaston.dev/blob/main/LICENCE.txt"
                target="_blank"
              >
                Licence MIT
              </Link>
              .
            </p>
            <div className=" rounded-md flex flex-col gap-3 bg-slate-100  ">
              <p>
                La permission est accordée, gratuitement, à toute personne
                obtenant une copie de ce logiciel et des fichiers de
                documentation associés (le &ldquo;Logiciel&rdquo;), de traiter
                dans le Logiciel sans restriction, y compris sans limitation les
                droits pour utiliser, copier, modifier, fusionner, publier,
                distribuer, sous-licencier et/ou vendre des copies du Logiciel,
                et de permettre aux personnes auxquelles le Logiciel est meublé
                pour le faire, sous réserve des conditions suivantes:
              </p>

              <p>
                L&apos;avis de droit d&apos;auteur ci-dessus et cet avis de
                permission doivent être inclus dans tous les copies ou parties
                substantielles du Logiciel.
              </p>

              <p>
                LE LOGICIEL EST FOURNI &ldquo;TEL QUEL&rdquo;, SANS GARANTIE
                D&apos;AUCUNE SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS MAIS SANS
                S&apos;Y LIMITER LES GARANTIES DE QUALITÉ MARCHANDE,
                D&apos;ADAPTATION À UN USAGE PARTICULIER ET D&apos;ABSENCE DE
                CONTREFAÇON. EN AUCUN CAS LE AUTEURS OU LES TITULAIRES DES
                DROITS D&apos;AUTEUR NE SERONT RESPONSABLES DE TOUTE
                RÉCLAMATION, DOMMAGES OU AUTRE RESPONSABILITÉ, QUE CE SOIT DANS
                UNE ACTION DE CONTRAT, DE DÉLIT OU AUTREMENT, DÉCOULANT DE, HORS
                OU EN RELATION AVEC LE LOGICIEL OU L&apos;UTILISATION OU
                D&apos;AUTRES TRANSACTIONS DANS LE LOGICIEL.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-balance">
              3 - Limitations de responsabilité.
            </h2>
            <p>
              <span className="mr-1">
                Marion Baston ne pourra être tenu pour responsable des dommages
                directs et indirects causés au matériel de l&apos;utilisateur,
                lors de l&apos;accès au site&nbsp;
              </span>
              <Link href="https://marionbaston.fr " className="hover:underline">
                https://marionbaston.fr
              </Link>
              .
            </p>
            <p>
              <span className="mr-1">
                Marion Baston décline toute responsabilité quant à
                l&apos;utilisation qui pourrait être faite des informations et
                contenus présents sur&nbsp;
              </span>
              <Link href="https://marionbaston.fr " className="hover:underline">
                https://marionbaston.fr
              </Link>
              .
            </p>
            <p>
              <span className="mr-1">
                Marion Baston s&apos;engage à sécuriser au mieux le site&nbsp;
              </span>
              <Link href="https://marionbaston.fr " className="hover:underline">
                https://marionbaston.fr
              </Link>
              <span>
                , cependant sa responsabilité ne pourra être mise en cause si
                des données indésirables sont importées et installées sur son
                site à son insu.
              </span>
            </p>
            <p>
              Des espaces interactifs (espace contact ou commentaires) sont à la
              disposition des utilisateurs. Marion Baston se réserve le droit de
              supprimer, sans mise en demeure préalable, tout contenu déposé
              dans cet espace qui contreviendrait à la législation applicable en
              France, en particulier aux dispositions relatives à la protection
              des données.
            </p>
            <p>
              Le cas échéant, Marion Baston se réserve également la possibilité
              de mettre en cause la responsabilité civile et/ou pénale de
              l&apos;utilisateur, notamment en cas de message à caractère
              raciste, injurieux, diffamant, ou pornographique, quel que soit le
              support utilisé (texte, photographie …).
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-balance">
              4 - CNIL et gestion des données personnelles.
            </h2>
            <p>
              <span className="mr-1">À ce jour, le site&nbsp;</span>
              <Link href="https://marionbaston.fr " className="hover:underline">
                https://marionbaston.fr
              </Link>
              <span>&nbsp;</span>
              collecte des informations personnelles (nom, prénom, email,
              message) lorsque vous utilisez le formulaire de contact. Ces
              données sont uniquement utilisées pour répondre à vos demandes et
              sont envoyées par email au propriétaire du site.{" "}
            </p>
            <p>
              Utilisation des données : Les informations que vous fournissez via
              le formulaire de contact seront utilisées exclusivement pour
              traiter votre demande.
            </p>
            <p>
              Gestion des informations : Ces données ne sont pas stockées dans
              une base de données, elles sont envoyées directement au
              propriétaire du site sous forme de message électronique.
            </p>
            <p>
              Sécurité des données : Bien que les informations ne soient pas
              archivées, le propriétaire du site s'engage à garantir que la
              communication par email respecte des mesures de sécurité pour
              protéger vos données. Si vous avez des questions concernant la
              gestion de vos informations personnelles via le formulaire de
              contact, n'hésitez pas à contacter le propriétaire du site.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-balance">
              5 - Liens hypertextes et cookies.
            </h2>
            <p>
              <span className="mr-1">Le site</span>
              <Link href="https://marionbaston.fr " className="hover:underline">
                https://marionbaston.fr
              </Link>
              <span>
                &nbsp;contient des liens hypertextes vers d&apos;autres sites et
                dégage toute responsabilité à propos de ces liens externes ou
                des liens créés par d&apos;autres sites vers&nbsp;
              </span>
              <Link href="https://marionbaston.fr " className="hover:underline">
                https://marionbaston.fr
              </Link>
              .
            </p>
            <p>
              <span className="mr-1">La navigation sur le site</span>
              <Link href="https://marionbaston.fr " className="hover:underline">
                https://marionbaston.fr
              </Link>
              <span>
                &nbsp;est ne provoque l&apos;installation d&apos;aucun cookie
                sur l&apos;ordinateur de l&apos;utilisateur.
              </span>
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-balance">
              6 - Droit applicable et attribution de juridiction.
            </h2>
            <p>
              <span className="mr-1">
                Tout litige en relation avec l&apos;utilisation du site
              </span>
              <Link href="https://marionbaston.fr " className="hover:underline">
                https://marionbaston.fr
              </Link>
              <span>
                &nbsp;est soumis au droit français. En dehors des cas où la loi
                ne le permet pas, il est fait attribution exclusive de
                juridiction aux tribunaux compétents de Paris.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
