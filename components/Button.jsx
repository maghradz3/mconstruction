import React from "react";

const Button = ({ icon }) => {
  return (
    <button
      type="submit"
      className="button rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
    >
      <span className="group-hover:-translate-y-[120%] group-hover:opacorty-0 transition-all duration-500">
        Let's talk
      </span>
      <GoArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
    </button>
  );
};

export default Button;
