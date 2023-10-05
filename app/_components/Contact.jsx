export default function Contact() {
  return (
    <div className="text flex justify-center to-[#f3def3c0] bg-gradient-to-t from-[#FFFFFF] to-transparent  py-14">
      <div className="w-3/4">
        <div className="flex justify-center flex-col items-center  ">
          <div className="flex justify-start flex-col mb-10">
            <p className="text-xl font-bold text-center sm:text-3xl w-32 mb-5 border-b-2 pb-2 w- border-purple">
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
