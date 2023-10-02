export default function Contact() {
  return (
    <div className="text mt-10 sm:mt-56 flex justify-center bg-[#f2f3f3] py-14">
      <div className="w-3/4">
        <div className="flex justify-center flex-col items-center  ">
          <div className="flex justify-start flex-col mb-10">
            <p className="text-xl font-bold text-center sm:text-3xl w-28 mb-5 border-b-2 pb-2 border-purple">
              Contact
            </p>
            <p className="text-center">Entrons en contact.</p>
          </div>
          <form className="w-2/5 flex justify-center flex-col items-center">
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Nom" />
            <input type="tel" placeholder="Numéro de téléphone" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Votre message" />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
