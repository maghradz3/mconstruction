"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SingleSlider from "./SingleSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { GoArrowLeft } from "react-icons/go";

const SingleProject = ({ project }) => {
  return (
    <div className="flex justify-center flex-col items-center gap-10 min-h-fit ">
      <motion.h1
        // variants={fadeIn("up", 0.2)}
        // initial="hidden"
        // animate="show"
        // exit="hidden"
        className="text-secondary text-2xl md:text-6xl animate-pulse"
      >
        {project.title}
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className=" text-sm lg:text-lg bg-gradient-to-r from-primary to-secondary text-white  rounded-lg p-5"
      >
        {project.description}
        {project.description}
      </motion.p>
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="place-self-start text-sm md:text-2xl  "
      >
        <h2 className="text-primary mb-2  ">
          <span className="text-secondary ">პროექტის დაიწყო: </span>
          {project.startingAt}
        </h2>
        <h2 className="text-primary  ">
          <span className="text-secondary">პროექტი ჩაბარდა: </span>
          {project.finishedAt}
        </h2>
      </motion.div>
      <SingleSlider images={project.photos} />

      <Link
        href="/main"
        className="button rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacorty-0 transition-all duration-500">
          Go Back
        </span>
        <GoArrowLeft className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </Link>
    </div>
  );
};

export default SingleProject;
