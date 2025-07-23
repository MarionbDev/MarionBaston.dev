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
    setIsChecked(!isChecked);
  };

  return (
    <div className="border-[1px]  rounded-3xl max-w-[800px] w-full ">
      <input
        type="checkbox"
        name="menu"
        id={numberChk}
        className="peer hidden"
        onChange={handleChangeCheckBox}
      />
      <label
        htmlFor={numberChk}
        className="cursor-pointer block peer-checked:bg-bg_greyLight  p-4 rounded-t-3xl"
      >
        <div className="flex justify-between items-center ">
          <div className="flex gap-3 items-center ">
            <span className=" text-2xl">{numberStep}</span> <h3>{title}</h3>
          </div>
          {!isChecked && (
            <Plus size={22} className="mr-4 peer-checked:hidden " />
          )}
          {isChecked && <Minus size={22} className="mr-4" />}{" "}
        </div>
      </label>
      <div className="hidden peer-checked:block p-4 bg-bg_greyLight rounded-b-3xl ">
        <span className="flex w-full border-t-[1px] border-black pb-4"></span>
        <p>{description}</p>
      </div>
    </div>
  );
}
