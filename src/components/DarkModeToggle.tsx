import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
      relative
      w-16 h-9
      rounded-full
      flex items-center
      px-1
      backdrop-blur
      bg-gray-200/70
      dark:bg-neutral-800
      shadow-inner
      transition
      "
    >
      {/* sun icon */}
      <svg
        className="w-4 h-4 text-gray-500 absolute left-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      {/* toggle circle */}
      <div
        className={`
        absolute
        w-7 h-7
        bg-white
        dark:bg-neutral-700
        rounded-full
        shadow-md
        flex items-center justify-center
        transition-transform duration-300
        ${dark ? "translate-x-7" : "translate-x-0"}
        `}
      >
        {/* moon icon */}
        <svg
          className="w-4 h-4 text-gray-600 dark:text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
        </svg>
      </div>
    </button>
  );
};

export default ThemeToggle;