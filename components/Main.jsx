import { fetchTours } from "@/utils/actions";
import Image from "next/image";
import React from "react";
import ImageSlider from "./ImageSlider";
import Carousel from "./Carousel";

const Main = async () => {
  const data = await fetchTours();
  console.log(data);
  return (
    <div className="flex justify-center items-start gap-8 ">
      {data?.map((project) => {
        return (
          <div
            className="card -96 bg-base-200 shadow-xl border border-solid border-primary"
            key={project?.id}
          >
            <ImageSlider images={project.photos} />

            <h2 className="card-title px-5 mx-auto text-secondary">
              {project.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="mt-8 px-5 card-actions flex flex-row text-secondary ">
              <div className="badge badge-outline">{project.startingAt}</div>
              <div className="badge badge-outline">{project.finishedAt}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
