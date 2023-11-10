"use client";
import React, { useState, useEffect } from "react";
import { MdDarkMode , MdLightbulbOutline } from "react-icons/md";
import { useTheme } from "next-themes";

const ThemesComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme == "system" ? systemTheme : theme;
  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <MdDarkMode className=" cursor-pointer" onClick={()=>setTheme("light")} size={25}  />
        ) : (
          <MdLightbulbOutline className=" cursor-pointer" onClick={()=>setTheme("dark")} size={25}  />
        ))}
    </div>
  );
};

export default ThemesComp;
