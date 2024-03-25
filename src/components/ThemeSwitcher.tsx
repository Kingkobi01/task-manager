import { useContext, useEffect } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const setDarkTheme = () => {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };
  const setLightTheme = () => {
    localStorage.setItem("theme", "");
    setTheme("");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      setTheme(savedTheme);
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkTheme();
      } else {
        setLightTheme();
      }
    }
  }, []);
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  return (
    <div className="cursor-pointer">
      {
        <BsMoonStarsFill
          size={25}
          className={`text-blue-600 ${theme !== "dark" && "hidden"}`}
          onClick={setLightTheme}
        />
      }
      <BsSunFill
        size={25}
        className={`text-orange-600 ${theme === "dark" && "hidden"}`}
        onClick={setDarkTheme}
      />
    </div>
  );
};

export default ThemeSwitcher;
