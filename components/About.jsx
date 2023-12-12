"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Image from "next/image";
import lukaMg from "../assets/Luka.jpg";
import { FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa";
import AboutInfo from "./AboutInfo";

const Users = [
  {
    name: "Luka Maghradze",
    image: { lukaMg },
    description: "Project Manager with 5 year experience",
    Linkdin: "url",
    facebook: "url",
    phone: "url",
  },
  {
    name: "Givi Meburishvili",
    image: { lukaMg },
    description: "Project Manager with 5 year experience",
    Linkdin: "url",
    facebook: "url",
    phone: "url",
  },
];

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
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col md:flex-row"
      ></motion.div>
      <AboutInfo />
    </div>
  );
};

export default About;
