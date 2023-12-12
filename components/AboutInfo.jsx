import React from "react";

const AboutInfo = () => {
  return (
    <div className="flex flex-col gap-5 mt-9">
      <h1 className="place-self-start  text:xl md:text-3xl">
        About <span className="text-primary">Us</span>
      </h1>
      <h3>Ma Construction: Building Georgia's Future</h3>

      <p className=" place-self-start">
        Welcome to Ma Construction, where we bring your architectural visions to
        life with precision and passion. Based in the heart of Georgia, our
        company has been a cornerstone in the construction industry for over [X]
        years, shaping skylines and crafting communities.
      </p>

      <span className=" place-self-start text-xl md:text-3xl">
        Our <span className="text-primary">Legacy</span>
      </span>
      <p className=" place-self-start">
        Founded in 2020 by , Ma Construction began as a small team with big
        dreams. Today, we stand as one of Georgia's most trusted construction
        companies, known for our dedication to quality, safety, and
        sustainability. Our journey is marked by countless successful projects,
        ranging from residential homes to commercial megastructures.
      </p>
    </div>
  );
};

export default AboutInfo;
