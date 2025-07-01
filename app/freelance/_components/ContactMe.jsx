import ContactForm from "../../_components/ContactForm";

export default function ProjectsFree() {
  return (
    <>
      <div id="me-contacter" className=" flex flex-col gap-8">
        <h1 className="bg-free_yellow w-fit text-xl md:text-[2rem] font-semibold px-1">
          Contactez-moi
        </h1>
        <div className="flex flex-col items-center">
          <p className="mb-8">Contactez-moi : Discutons de vos besoins ! </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
