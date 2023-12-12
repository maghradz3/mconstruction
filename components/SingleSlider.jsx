import { dataTagSymbol } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const SingleSlider = ({ images }) => {
  console.log("imagerebi", images);
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex justify-center items-center flex-col    "
    >
      <div className={`carousel w-full   `}>
        {images.map((image, i) => {
          return (
            <div
              id={`item${i}`}
              className="carousel-item flex justify-center items-center  w-full      "
            >
              <div className="p-2 border border-gray-300 shadow-lg rounded-lg bg-white">
                <Image
                  src={image}
                  className="  object-fill object-center    h-full  "
                  width={600}
                  height={600}
                  quality={100}
                  priority
                  alt="project individual images"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div class="flex justify-center w-full py-2 gap-2 px-5">
        {images.map((_, i) => {
          return (
            <a
              href={`#item${i + 1}`}
              className="w-[15px] h-[15px] text-[10px]   md:w-[20px] md:h-[20px] md:text-[14px] flex justify-center items-center bg-slate-400  rounded-md
             hover:scale-125 hover:bg-slate-600 hover:text-white transition-all duration-200  "
            >
              {i + 1}
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SingleSlider;
