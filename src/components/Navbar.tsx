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

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold text-gray-900">
          Ardika R. Septian
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          {sections.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`cursor-pointer relative transition ${
                active === item.id
                  ? "text-black after:w-full"
                  : "text-gray-500 hover:text-black"
              } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-black after:transition-all after:w-0`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1.5"
        >
          <span className={`w-6 h-[2px] bg-black transition ${open && "rotate-45 translate-y-[7px]"}`} />
          <span className={`w-6 h-[2px] bg-black transition ${open && "opacity-0"}`} />
          <span className={`w-6 h-[2px] bg-black transition ${open && "-rotate-45 -translate-y-[7px]"}`} />
        </button>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ${
          open ? "max-h-96 opacity-100 shadow-lg" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 space-y-5 font-medium">
          {sections.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`cursor-pointer ${
                active === item.id ? "text-black" : "text-gray-500"
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

export default Navbar;
