import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Kabinet from "../assets/Organization/Kabinet.jpeg";
import logistic from "../assets/Organization/Logistik.jpeg";
import Lead from "../assets/Organization/Lead_page-0001 (1).jpg";
import visitCompany from "../assets/Organization/VisitCompany.jpg";
import sindi from "../assets/Organization/Sindi.jpeg";
import pengabdian from "../assets/Organization/Pengabdian.jpeg";

interface OrgExperience {
  role: string;
  org: string;
  date: string;
  description: string;
  photos: string[];
}

const experiences: OrgExperience[] = [
  {
    role: "Member, Communication and Information",
    org: "UKM Ikatan Mahasiswa Papua (IMMAPA)",
    date: "Jan 2024 - Feb 2025",
    description:
      "Managed organizational communication, social media content, and event documentation for the division.",
    photos: [Kabinet],
  },
  {
    role: "Logistics Staff",
    org: "UKM Ikatan Mahasiswa Papua (IMMAPA)",
    date: "Jul 2024 - Dec 2024",
    description:
      "Handled equipment prep, inventory, vendor coordination, and on-site supervision for org events.",
    photos: [logistic],
  },
  {
    role: "Workshop Lead",
    org: "UKM Ikatan Mahasiswa Papua (IMMAPA)",
    date: "May 2024 - Jun 2024",
    description:
      "Led IMMAPA Workshop II, coordinating the committee, managing event communications, and attracting 50+ external participants.",
    photos: [Lead],
  },
  {
    role: "Cabinet Staff (Kominfo)",
    org: "UKM IMMAPA - Charity Program",
    date: "Aug 2024 - Oct 2024",
    description:
      "Supported the Charity program run by another division as part of the cabinet, helping with communication and documentation needs.",
    photos: [pengabdian],
  },
  {
    role: "Academic Division Staff",
    org: "HMIT",
    date: "Oct 2023 - Dec 2023",
    description:
      "Assisted the Head of the Academic Division in organizing a company visit to Trans7, supporting event planning, coordination, and participant management.",
    photos: [visitCompany],
  },
  {
    role: "Volunteer Tester",
    org: "Sindi App",
    date: "2023 - 2024",
    description:
      "Volunteered to test Sindi, a social support platform for people with sensory disabilities, providing feedback on accessibility and usability.",
    photos: [sindi],
  },
];

const TOTAL = experiences.length;
const VISIBLE_RANGE = 2;

const navButton =
  "group flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 dark:border-white/20 bg-transparent hover:bg-gray-900 hover:border-gray-900 dark:hover:bg-white dark:hover:border-white transition-colors duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 dark:focus-visible:ring-white/50";

const navIcon =
  "text-xl text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors";

const pad = (n: number) => String(n).padStart(2, "0");

const Organization = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrev = () => setCurrentIndex((i) => (i === 0 ? TOTAL - 1 : i - 1));
  const handleNext = () => setCurrentIndex((i) => (i === TOTAL - 1 ? 0 : i + 1));

  const currentItem = experiences[currentIndex];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="organization"
        className="relative py-24 md:py-32 bg-[#FAFAFC] dark:bg-[#050505] transition-colors duration-700 overflow-hidden select-none"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-900 dark:border-white/20 pb-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-white tracking-tight leading-none">
                Organization.
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-500 dark:text-gray-400">
                Community leadership and collaborative experiences outside the classroom.
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-900 dark:text-white font-semibold">
                // Vol. 01
              </span>
            </div>
          </motion.div>

          {/* Curved Card Arc Showcase */}
          <div className="relative h-[300px] sm:h-[360px] md:h-[420px] w-full flex items-center justify-center my-10">
            {experiences.map((exp, index) => {
              // Offset terpendek dengan wrap-around (carousel melingkar)
              let offset = index - currentIndex;
              if (offset > TOTAL / 2) offset -= TOTAL;
              if (offset < -TOTAL / 2) offset += TOTAL;

              const distance = Math.abs(offset);
              if (distance > VISIBLE_RANGE) return null;

              const isCenter = offset === 0;

              return (
                <motion.button
                  key={`${exp.org}-${exp.role}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={isCenter ? exp.role : `Show ${exp.role}`}
                  aria-current={isCenter}
                  initial={false}
                  animate={{
                    x: offset * 160,
                    y: offset * offset * 22,
                    rotate: offset * 8,
                    scale: 1 - distance * 0.12,
                    zIndex: 30 - distance * 10,
                    opacity: 1 - distance * 0.3,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 30, mass: 0.8 }}
                  // Tidak ada transition-all / class opacity di sini: keduanya
                  // bentrok dengan animasi framer-motion (transform & opacity).
                  className={`absolute block p-0 w-[190px] sm:w-[240px] md:w-[280px] h-[260px] sm:h-[310px] md:h-[360px] rounded-[24px] overflow-hidden will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 dark:focus-visible:ring-white/50 ${
                    isCenter
                      ? "cursor-default ring-1 ring-gray-900/10 dark:ring-white/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.05)]"
                      : "cursor-pointer grayscale contrast-125 hover:grayscale-0"
                  }`}
                >
                  <img
                    src={exp.photos[0]}
                    alt=""
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none"
                  />

                  {/* Glossy / Glass Overlay (hanya kartu tengah) */}
                  {isCenter && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent opacity-30 mix-blend-overlay" />

                      <div className="absolute bottom-5 left-5 right-5 text-left">
                        <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-xl p-3">
                          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-300 block truncate mb-1">
                            {exp.org}
                          </span>
                          <span className="text-sm sm:text-base font-serif text-white line-clamp-1 leading-snug block">
                            {exp.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Details & Navigation */}
          <div className="mt-12 flex flex-col items-center text-center max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                aria-live="polite"
                className="flex flex-col items-center"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 dark:text-white leading-tight mb-3">
                  {currentItem.role}
                </h3>

                <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-5">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {currentItem.org}
                  </span>
                  <span className="opacity-30">|</span>
                  <span>{currentItem.date}</span>
                </div>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                  {currentItem.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-center gap-6">
              <button type="button" onClick={handlePrev} aria-label="Previous card" className={navButton}>
                <FiChevronLeft className={navIcon} />
              </button>

              <div className="font-mono text-xs tracking-[0.3em] px-2 flex items-center gap-2">
                <span className="text-gray-900 dark:text-white font-semibold">
                  {pad(currentIndex + 1)}
                </span>
                <span className="text-gray-400 dark:text-gray-600">/</span>
                <span className="text-gray-400 dark:text-gray-600">{pad(TOTAL)}</span>
              </div>

              <button type="button" onClick={handleNext} aria-label="Next card" className={navButton}>
                <FiChevronRight className={navIcon} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default Organization;