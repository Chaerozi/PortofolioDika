import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // FIX: sebelumnya section terakhir (Contact) tidak pernah aktif karena kondisi
  // "scrollY < top + height" gagal terpenuhi saat user sudah mentok di paling bawah halaman
  // (tidak bisa scroll melewati batas dokumen walau section Contact sudah kelihatan penuh).
  // Solusi: cari section terakhir yang `offsetTop`-nya sudah terlewati, dan kalau
  // posisi scroll sudah mendekati paling bawah dokumen, langsung set Contact sebagai aktif.
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      if (nearBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActive(current);
    };

    handleScroll();
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
    <>
      {/* Overlay — muncul di belakang pill saat menu mobile terbuka.
          Tap di luar area menu untuk menutup, sekaligus fokus perhatian ke menu. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/*
        Container "Dynamic Island": pill mengambang, mengecil di desktop
        (isinya menu horizontal + sliding highlight), dan bisa "melebar ke bawah"
        di mobile saat menu dibuka — layout animasi otomatis pakai `layout` dari framer-motion,
        jadi transisi tinggi/lebarnya halus seperti Dynamic Island di iPhone.
      */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className={`${open ? "w-[250px]" : "w-full max-w-fit"} md:max-w-fit md:w-auto rounded-[24px] ring-1 ring-black/[0.06] dark:ring-white/[0.08]
        bg-white/75 dark:bg-neutral-900/75 backdrop-blur-2xl backdrop-saturate-150
        shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_28px_-8px_rgba(0,0,0,0.12)]
        dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_12px_28px_-8px_rgba(0,0,0,0.5)]
        overflow-hidden relative z-50`}
      >
        {/* Baris utama — selalu terlihat */}
        <div className="flex items-center gap-1.5 px-2.5 py-2.5 md:px-3">
          {/* Monogram — ring tipis, terasa seperti logo brand kecil */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[13px] font-semibold tracking-wide ring-1 ring-black/5 dark:ring-white/10 shrink-0">
            AR
          </div>

          {/* Menu desktop — segmented pill dengan highlight yang bergeser */}
          <ul className="hidden md:flex items-center gap-1 ml-2 relative">
            {sections.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative px-5 py-2.5 text-sm font-medium tracking-tight cursor-pointer select-none rounded-full transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
              >
                {active === item.id && (
                  <motion.span
                    layoutId="navActivePill"
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 dark:from-white dark:to-neutral-100 shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors ${
                    active === item.id
                      ? "text-white dark:text-zinc-900"
                      : "text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="hidden md:block w-px h-6 bg-zinc-200/80 dark:bg-zinc-700/60 mx-2" />

          <ThemeToggle dark={dark} toggleTheme={toggleTheme} />

          {/* Tombol menu — hanya mobile */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full ml-0.5 shrink-0 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
          >
            <span
              className={`block w-4 h-[1.5px] bg-zinc-900 dark:bg-white transition-transform duration-300 ${
                open ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-zinc-900 dark:bg-white mt-[5px] transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Menu mobile — muncul di dalam pill yang sama, container melebar otomatis (layout) */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="md:hidden flex flex-col px-2.5 pb-2.5 pt-1 gap-0.5 border-t border-black/[0.04] dark:border-white/[0.06] mt-1"
            >
              {sections.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-[14px] font-medium tracking-tight cursor-pointer transition-colors ${
                    active === item.id
                      ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                      : "text-zinc-500 dark:text-zinc-400 active:bg-black/[0.04] dark:active:bg-white/[0.06]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      active === item.id
                        ? "bg-white dark:bg-zinc-900"
                        : "bg-zinc-300 dark:bg-zinc-600"
                    }`}
                  />
                  {item.label}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
    </>
  );
};

const ThemeToggle = ({ dark, toggleTheme }: { dark: boolean; toggleTheme: () => void }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-12 h-7 flex items-center rounded-full bg-zinc-200/70 dark:bg-zinc-700/60 px-[3px] transition-colors shrink-0"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="w-[22px] h-[22px] rounded-full bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center"
        style={{ marginLeft: dark ? "auto" : 0 }}
      >
        {dark ? (
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </motion.div>
    </button>
  );
};

export default Navbar;