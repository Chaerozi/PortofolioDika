import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Ardika R. Septian
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <ul className="flex items-center gap-8 font-medium">
            {sections.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`cursor-pointer relative transition ${
                  active === item.id
                    ? "text-black dark:text-white after:w-full"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:w-0`}
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Toggle */}
          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />

        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-4 md:hidden">

          {/* Toggle Mobile */}
          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col space-y-1.5"
          >
            <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open && "rotate-45 translate-y-[7px]"}`} />
            <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open && "opacity-0"}`} />
            <span className={`w-6 h-[2px] bg-black dark:bg-white transition ${open && "-rotate-45 -translate-y-[7px]"}`} />
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-black transition-all duration-300 ${
          open ? "max-h-96 opacity-100 shadow-lg" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-5 font-medium">

          {sections.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`cursor-pointer ${
                active === item.id
                  ? "text-black dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {item.label}
            </li>
          ))}

        </ul>
      </div>

    </nav>
  );
};

const ThemeToggle = ({ dark, toggleTheme }: any) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-9 flex items-center rounded-full bg-gray-200 dark:bg-neutral-800 px-1 transition"
    >

      {/* Sun */}
      <svg
        className="absolute left-3 w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      {/* Slider */}
      <div
        className={`w-7 h-7 rounded-full bg-white dark:bg-neutral-700 shadow-md flex items-center justify-center transform transition duration-300 ${
          dark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {/* Moon */}
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

export default Navbar;