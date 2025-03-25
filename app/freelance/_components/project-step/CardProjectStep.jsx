"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function CardProjectStep({
  numberStep,
  title,
  description,
  numberChk,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeCheckBox = () => {
    setIsChecked(isChecked);
  };

  return (
    <div className="border-t-[2px] border-x-[2px] border-t-[#442c74]  border-x-[#442c74]  border-b-4 rounded-3xl max-w-[800px] w-full ">
      <input
        type="checkbox"
        name="menu"
        id={numberChk}
        className="peer hidden"
        onChange={handleChangeCheckBox}
      />
      <label
        for={numberChk}
        className="cursor-pointer block peer-checked:bg-free_yellow p-4 rounded-t-3xl"
      >
        <div className="flex justify-between items-center ">
          <div className="flex gap-3 items-center ">
            <span className=" text-2xl">{numberStep}</span> <h3>{title}</h3>
          </div>
          {!isChecked && (
            <Plus size={22} className="mr-4 peer-checked:hidden " />
          )}
          {isChecked && <Minus size={22} className="" />}{" "}
        </div>
      </label>
      <div
        // class="partie-1"
        className="hidden peer-checked:block p-4 bg-free_yellow rounded-b-3xl "
      >
        <span className="flex w-full border-t-2 border-black pb-4"></span>
        <p>{description}</p>
      </div>
    </div>
  );
}
