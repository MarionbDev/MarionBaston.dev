import ContactForm from "../../_components/ContactForm";

export default function ContactMeFree() {
  return (
    <>
      <div id="me-contacter" className=" flex flex-col gap-8 my-20">
        <div className=" flex items-end gap-1 h-16 mb-6 ">
          <h1 className=" text-xl md:text-[2rem]  text-txt_black font-semibold px-1">
            Contactez-moi
          </h1>{" "}
          <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-free_yellow "></span>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-8 text-xl ">Discutons ensemble de vos besoins ! </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
