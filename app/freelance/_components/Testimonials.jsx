export default function Testimonials() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className=" flex items-end gap-1 h-16 mb-10 ">
          <h1 className="  text-xl md:text-[2rem]  text-txt_black font-semibold px-1">
            Témoignages
          </h1>{" "}
          <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-free_yellow "></span>
        </div>
        <p className="text-[1rem] md:text-[1.07rem] text-pretty leading-7">
          Ils m'ont fait confiance ! Découvrez leurs avis et expériences.
        </p>
      </div>
    </>
  );
}

// 💡 Quel était votre besoin initial ?
// 💡 Comment notre collaboration s’est-elle déroulée ?
// 💡 Quels bénéfices avez-vous observés grâce au projet ?
// 💡 Recommanderiez-vous mes services ? Pourquoi ?
