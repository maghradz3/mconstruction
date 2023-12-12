"use client";
import { fetchProjects } from "@/utils/actions";

import React, { useState } from "react";
import ImageSlider from "./ImageSlider";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Main = () => {
  const [checked, setIsCheked] = useState(false);
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["project"],
    queryFn: fetchProjects,
  });

  {
    isPending && <h1>Loading....</h1>;
  }
  {
    isError && <h1>{error}</h1>;
  }

  return (
    <div className="flex-flex-col">
      <motion.h1
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-xl md:text-6xl text-primary mt-3 "
      >
        შესრულებული პროექტები
      </motion.h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9 ">
        {data?.map((project) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="card-96 glass shadow-xl rounded-xl flex flex-col "
              key={project._id}
            >
              <ImageSlider images={project.photos} />
              <Link href={`/main/${project._id}`}>
                <h2 className="card-title px-5 mx-auto text-secondary mt-3">
                  {project.title}
                  <div className="badge badge-secondary ">ვრცლად</div>
                </h2>
              </Link>
              <div className="my-5 px-5 card-actions flex flex-row text-secondary ">
                <div className="badge badge-outline">{project.startingAt}</div>
                <div className="badge badge-outline">{project.finishedAt}</div>
              </div>
              <Link
                className="btn btn-ghost place-self-end  text-slate-500"
                href="/contact"
              >
                დაგვიკავშირდით
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
