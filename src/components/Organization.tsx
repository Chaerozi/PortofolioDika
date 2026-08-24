import { useRef } from "react";
import { motion } from "framer-motion";
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
    role: "Member, Communication and Information Division (Kominfo)",
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
    // TODO: cek tanggal kegiatan IMMAPA Charity, dan tambahkan foto kalau sudah ada
    role: "Cabinet Staff (Kominfo Division)",
    org: "UKM Ikatan Mahasiswa Papua (IMMAPA) - Charity Program",
    date: "Agt - Okt 2024",
    description:
      "Supported the Charity program run by another division as part of the cabinet, helping with communication and documentation needs.",
    photos: [pengabdian],
  },
  {
    role: "Academic Division Staff",
    org: "HMIT",
    date: "Oct 2023 - Des 2023",
    description:
      "Assisted the Head of the Academic Division in organizing a company visit to Trans7, supporting event planning, coordination, and participant management.",
    photos: [visitCompany],
  },
  {
    // TODO: cek tanggal kegiatan volunteer testing Sindi
    role: "Volunteer Tester",
    org: "Sindi App",
    date: "2023 - 2024",
    description:
      "Volunteered to test Sindi, a social support platform for people with sensory disabilities (visual, hearing, and speech impairments), providing feedback on accessibility and usability.",
    photos: [sindi],
  },
];

const Organization = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="organization" className="py-16 md:py-20 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-end justify-between border-b border-gray-200 pb-3 dark:border-gray-800"
        >
          <div>
            <h2 className="text-[1.6rem] font-semibold tracking-tight text-gray-900 dark:text-white">
              Organizational &amp; Volunteer Experience
            </h2>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
              Swipe or use the arrows to browse.
            </p>
          </div>

          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scrollByCard("left")}
              aria-label="Scroll left"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200
              text-gray-500 transition-colors hover:border-indigo-300 hover:text-indigo-600
              dark:border-gray-800 dark:text-gray-400 dark:hover:border-indigo-800 dark:hover:text-indigo-400"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              aria-label="Scroll right"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200
              text-gray-500 transition-colors hover:border-indigo-300 hover:text-indigo-600
              dark:border-gray-800 dark:text-gray-400 dark:hover:border-indigo-800 dark:hover:text-indigo-400"
            >
              <FiChevronRight />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6
          [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: "easeOut" }}
              className="snap-start shrink-0 w-[280px] sm:w-[320px] rounded-2xl border border-gray-200
              bg-white dark:border-gray-800 dark:bg-neutral-950 overflow-hidden"
            >
              {item.photos.length > 0 && (
                <img
                  src={item.photos[0]}
                  alt={`${item.role} documentation`}
                  className="h-40 w-full object-cover"
                />
              )}

              <div className="p-5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-600">
                  {item.date}
                </span>

                <h3 className="mt-2 font-semibold text-gray-900 dark:text-white leading-snug">
                  {item.role}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {item.org}
                </p>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organization;