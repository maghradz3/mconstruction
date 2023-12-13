"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Image from "next/image";
import lukaMg from "../assets/Luka.jpg";
import { FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa";
import AboutInfo from "./AboutInfo";

const About = () => {
  return (
    <div className="flex flex-col place-self-start">
      <motion.h1
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center mb-12 font-semibold text-3xl mt-4 md:text-5xl leading-tight place-self-start"
      >
        Our <span className="text-primary">Team</span>
      </motion.h1>

      <AboutInfo />
    </div>
  );
};

export default About;
