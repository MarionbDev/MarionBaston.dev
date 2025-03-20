import CustomLink from "./CustomLink";

export default function HeaderFree() {
  return (
    <div className=" mt-20">
      <section className="flex flex-col gap-8">
        <h1 className="text-3xl  ">
          Boostez votre présence en ligne avec un site performant et moderne !
        </h1>
        <h2 className="text-base text-pretty">
          Artisans, commerçants, entrepreneurs : je vous aide à gagner en
          visibilité et à attirer plus de clients grâce au marketing digital.
        </h2>
        <CustomLink href="/me-contacter" className="">
          Discutons de votre projet !
        </CustomLink>
      </section>
    </div>
  );
}
