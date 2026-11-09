import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Conference from "../assets/images/certificates/Conference.png";
import Jabar from "../assets/images/certificates/jabar.png";
import Toefl from "../assets/images/certificates/Toefl.png";
import Backend from "../assets/images/certificates/Backend.png";
import Frontend from "../assets/images/certificates/Front.png";
import Java from "../assets/images/certificates/Java.png";
import Pelatihan from "../assets/images/certificates/Pelatihan.png";
import Mtcna from "../assets/images/certificates/Mtcna.png";
import Axio from "../assets/images/certificates/axio.jpg";
import Acp from "../assets/images/certificates/acp.png";
import UjiKompetensi from "../assets/images/certificates/UjiKompetensi.jpg";
import Bnsp from "../assets/images/certificates/bnsp.png";
import ArsitekturFullStack from "../assets/images/certificates/Fullstack.jpg";
import Jaringan2 from "../assets/images/certificates/NetworkingEssentials.jpg";
import Jaringan3 from "../assets/images/certificates/NetworkingBasic.jpg";
import Jaringan4 from "../assets/images/certificates/Jaringan1.jpg";
import Acp1 from "../assets/images/certificates/ACP1.jpg";

type CertType = "International" | "National" | "Training";

interface Certificate {
  img: string;
  label: string;
  type: CertType;
}

const certificates: Certificate[] = [
  { img: Conference, label: "Conference", type: "International" },
  { img: Jabar, label: "West Java", type: "National" },
  { img: Toefl, label: "TOEFL ITP", type: "International" },
  { img: Backend, label: "Basic Backend", type: "Training" },
  { img: Frontend, label: "Basic Frontend", type: "Training" },
  { img: Java, label: "Fundamentals of Java", type: "Training" },
  { img: Pelatihan, label: "VSGA", type: "Training" },
  { img: Mtcna, label: "MTCNA", type: "International" },
  { img: Axio, label: "Internship", type: "National" },
  { img: Acp, label: "ACP3", type: "National" },
  { img: UjiKompetensi, label: "Competency Test", type: "National" },
  { img: Bnsp, label: "BNSP", type: "National" },
  { img: ArsitekturFullStack, label: "Full Stack Web Development", type: "Training" },
  { img: Jaringan2, label: "Networking Essentials", type: "International" },
  { img: Jaringan3, label: "Networking Basic", type: "International" },
  { img: Jaringan4, label: "Networking", type: "International" },
  { img: Acp1, label: "ACP 1", type: "National" },
];

const badgeStyle: Record<CertType, string> = {
  International: "bg-gray-900 text-white dark:bg-white dark:text-gray-900",
  National: "bg-gray-200 text-gray-700 dark:bg-[#222] dark:text-gray-300",
  Training: "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400 border border-gray-200 dark:border-white/10",
};

const filterOptions: { label: string; value: CertType | "All" }[] = [
  { label: "All", value: "All" },
  { label: "International", value: "International" },
  { label: "National", value: "National" },
  { label: "Training", value: "Training" },
];

/* ---------- icon ---------- */
const IconZoom = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

/* ---------- scroll-reveal hook ---------- */
function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ---------- card component ---------- */
const CertificateCard = ({
  item,
  index,
  onSelect,
}: {
  item: Certificate;
  index: number;
  onSelect: (img: string) => void;
}) => {
  const { ref, inView } = useInView<HTMLButtonElement>();

  return (
    <button
      ref={ref}
      onClick={() => onSelect(item.img)}
      style={{ transitionDelay: `${(index % 6) * 75}ms` }}
      className={`group relative mb-6 w-full break-inside-avoid overflow-hidden rounded-[1.25rem] border border-gray-200/60 dark:border-white/5 bg-white dark:bg-[#111111] text-left transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-none ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative overflow-hidden bg-gray-50/50 dark:bg-black/30 pt-1">
        {/* Modern floating badge */}
        <span
          className={`absolute top-4 left-4 z-10 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-md ${badgeStyle[item.type]}`}
        >
          {item.type}
        </span>

        {/* Overlay gradient on hover for premium feel */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <img
          src={item.img}
          alt={item.label}
          className="w-full h-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        />
        
        {/* Centered Zoom icon on hover */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
           <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg">
             <IconZoom />
           </div>
        </div>
      </div>

      <div className="px-5 py-4 flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-900 dark:text-[#e8e4d9] line-clamp-1">
          {item.label}
        </span>
      </div>
    </button>
  );
};

/* ---------- main section ---------- */
const Certificates = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<CertType | "All">("All");

  const filtered =
    activeFilter === "All"
      ? certificates
      : certificates.filter((c) => c.type === activeFilter);

  return (
    <section
      id="certifications"
      className="relative py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-500"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-6xl ml-auto lg:mr-8">
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 dark:text-white tracking-tight">
              Certifications & Language
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              A curated collection of professional achievements, global certifications, and language proficiencies.
            </p>
          </motion.div>

          {/* Premium Filter Tabs */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="mt-10 flex flex-wrap gap-2 md:gap-3"
          >
            {filterOptions.map((tab) => {
              const count =
                tab.value === "All"
                  ? certificates.length
                  : certificates.filter((c) => c.type === tab.value).length;
              const isActive = activeFilter === tab.value;

              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white shadow-md"
                      : "bg-transparent text-gray-600 border-gray-300 hover:bg-gray-100 dark:text-gray-400 dark:border-[#333] dark:hover:bg-white/5 dark:hover:border-white/20"
                  }`}
                >
                  {tab.label} <span className="opacity-50 ml-1 font-mono text-[10px]">({count})</span>
                </button>
              );
            })}
          </motion.div>

          {/* Masonry Layout */}
          <div className="mt-12 columns-2 sm:columns-3 lg:columns-4 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.label}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <CertificateCard
                    item={item}
                    index={index}
                    onSelect={setPreview}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Languages Section */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="mt-28 mb-8 max-w-3xl ml-auto border-t border-gray-200 dark:border-[#222] pt-12"
          >
            <h3 className="text-xl md:text-2xl font-serif text-gray-900 dark:text-white">
              Language Proficiencies
            </h3>

            <div className="mt-6 flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg text-gray-900 dark:text-white">
                  Bahasa Indonesia
                </span>
                <span className="font-mono text-sm text-gray-500 dark:text-gray-400">
                  Native Speaker
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg text-gray-900 dark:text-white">
                  English
                </span>
                <span className="font-mono text-sm text-gray-500 dark:text-gray-400">
                  TOEFL ITP 547
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal Preview - Premium Glassmorphism */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[100] bg-white/80 dark:bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex items-center justify-center cursor-default"
            >
              <button
                onClick={() => setPreview(null)}
                aria-label="Close preview"
                className="absolute -top-12 right-0 md:-right-12 md:top-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 dark:bg-[#222] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <img
                src={preview}
                alt="Certificate Preview"
                className="w-full max-h-[85vh] object-contain drop-shadow-2xl rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;