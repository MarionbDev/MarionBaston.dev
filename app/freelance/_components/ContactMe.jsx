import ContactForm from "../../_components/ContactForm";

export default function ProjectsFree() {
  return (
    <>
      <div id="me-contacter" className=" flex flex-col gap-8">
        <h1 className="bg-free_yellow w-fit text-xl md:text-[2rem] font-semibold px-1">
          Contactez-moi
        </h1>
        <div className="flex flex-col items-center">
          <p className="mb-8 text-xl ">Discutons ensemble de vos besoins ! </p>
          <ContactForm className=" text-white bg-black shadow-inner shadow-free_grey text-center px-8 py-3 rounded-full hover:bg-free_grey hover:text-txt_black border-[1px] border-white hover:border-txt_black transition-colors duration-300 ease-in-out" />
        </div>
      </div>
    </>
  );
}
