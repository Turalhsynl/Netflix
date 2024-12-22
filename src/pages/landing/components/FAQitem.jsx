import React, { useState } from "react";

export const FAQitem = ({ item, openAccordion, setOpenAccordion }) => {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setOpenAccordion((prevState) => (prevState !== item.id ? item.id : null));
    setRotate((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#2D2D2D] w-full  text-left hover:bg-white/30"
    >
      <div className="flex justify-between items-center border border-black px-[24px] py-[24px]">
        <h3 className="text-[24px] text-white font-medium">{item.title}</h3>
        <svg className={`w-[30px] h-[30px] transform transition-transform duration-300 ${rotate ? "rotate-45" : "rotate-0"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
      </div>
      {openAccordion === item.id && (
        <div className="text-white text-[1.5rem] mt-[16px] leading-[1.8] px-[24px] pb-[24px]">
          <p className="mb-0">{item.desc.split("\n")[0]}</p>
          <p className="mt-[8px]">{item.desc.split("\n")[1]}</p>
        </div>
      )}
    </button>
  );
};

export default FAQitem;
