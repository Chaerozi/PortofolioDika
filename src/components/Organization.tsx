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

const Organization = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="organization" className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white tracking-tight">
              Organization & Volunteer
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Experiences outside the classroom building leadership, teamwork, and community impact. Swipe to explore.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex gap-3"
          >
            <button
              onClick={() => scrollByCard("left")}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 dark:border-neutral-800 text-gray-500 dark:text-neutral-400 hover:text-gray-900 hover:border-gray-900 dark:hover:text-white dark:hover:border-white transition-all"
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 dark:border-neutral-800 text-gray-500 dark:text-neutral-400 hover:text-gray-900 hover:border-gray-900 dark:hover:text-white dark:hover:border-white transition-all"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </motion.div>
        </div>

        {/* Carousel / Scroller */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          >
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group snap-start shrink-0 w-[280px] sm:w-[340px] flex flex-col rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/5 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-500"
              >
                {/* Image Wrapper with subtle scale on hover */}
                {item.photos.length > 0 && (
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-neutral-900">
                    <img
                      src={item.photos[0]}
                      alt={`${item.role} documentation`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                      {item.org}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-serif text-gray-900 dark:text-[#e8e4d9] leading-snug mb-2">
                    {item.role}
                  </h3>

                  <p className="font-mono text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                    {item.date}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-auto">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Organization;