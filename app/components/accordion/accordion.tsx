import React, { useState } from "react";
import UpArrowIcon from "../theme/icons/upArrowIcon";
import DownArrowIcon from "../theme/icons/downArrowIcon";

interface AccordionProps {
  title?: string;
  description?: string;
}

const Accordion = ({ description, title, ...props }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border-b border-b-black/40">
      <div
        className="flex gap-4 items-center justify-between cursor-pointer py-3"
        onClick={toggleAccordion}
      >
        <span
          className={`text-xl 2xl:text-2xl font-normal text-black ${
            isOpen ? "" : "truncate w-[85%] md:w-11/12"
          }`}
        >
          {title}
        </span>
        <span className={isOpen ? "open" : "closed"}>
          {isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
        </span>
      </div>
      {isOpen && (
        <p
          className={`text-base md:text-lg 2xl:text-xl text-white/90 font-light pt-2 pb-4 leading-[150%]`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Accordion;
