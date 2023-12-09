"use client";

import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  night: "night",
  winter: "winter",
};

const ToogleTheme = () => {
  const [theme, setTheme] = useState(themes.night);

  const toogleThemeHandler = () => {
    const newTheme = theme === themes.night ? themes.winter : themes.night;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toogleThemeHandler}
      className="btn btn-primary btn-sm btn-outline"
    >
      {theme === "night" ? (
        <BsSunFill className="w-4 h-4" />
      ) : (
        <BsMoonFill className="w-4 h-4" />
      )}
    </button>
  );
};

export default ToogleTheme;
