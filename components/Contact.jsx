"use client";
import Circles from "./Circles";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useState } from "react";
import emailjs from "@emailjs/browser";

//template_69430vz

//service_huphff7 servic id

//y2QZQvW577n0gorJ5 Public key

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handeSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_huphff7",
        "template_69430vz",
        {
          from_name: form.name,
          to_name: "Luka",
          from_email: form.email,
          to_email: "lmaghradze9@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        "y2QZQvW577n0gorJ5"
      )
      .then(
        () => {
          alert("Thank you, i will get back to you as soon as posible.");
          if (!form.email.length < 5) {
            alert("plese enter your email");
            return;
          }
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div className="h-full ">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-2-[700px] ">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's
            <span className="text-accent">Connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={handeSubmit}
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                name="name"
                type="text"
                placeholder="name"
                className="inputLab"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="inputLab"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              className="inputLab"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="textareaa"
              placeholder="message"
              value={form.message}
              onChange={handleChange}
              cols="30"
              rows="10"
            ></textarea>
            <button
              type="submit"
              className="button rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacorty-0 transition-all duration-500">
                Let's talk
              </span>
              <GoArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
