import { useEffect, useRef, useState } from "react";

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
// NOTE: adjust the filename below if your actual file is named differently
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
  { img: Jabar, label: "Internship", type: "National" },
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
  { img: Jaringan4, label: "Networking ", type: "International" },
  { img: Acp1, label: "ACP 1", type: "National" },
];

const badgeStyle: Record<CertType, string> = {
  International: "bg-black text-white dark:bg-white dark:text-black",
  National: "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900",
  Training: "bg-gray-200 text-gray-800 dark:bg-neutral-800 dark:text-gray-200",
};

const filterOptions: { label: string; value: CertType | "All" }[] = [
  { label: "All", value: "All" },
  { label: "International", value: "International" },
  { label: "National", value: "National" },
  { label: "Training", value: "Training" },
];

/* ---------- small icon ---------- */

const IconZoom = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

/* ---------- card ---------- */

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
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
      className={`group relative mb-6 w-full break-inside-avoid overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 text-left transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-none ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative overflow-hidden bg-gray-50 dark:bg-neutral-950">
        <span
          className={`absolute top-3 left-3 z-10 text-xs font-medium px-2.5 py-1 rounded-full ${badgeStyle[item.type]}`}
        >
          {item.type}
        </span>

        <img
          src={item.img}
          alt={item.label}
          className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
          {item.label}
        </span>
        <span className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          <IconZoom />
        </span>
      </div>
    </button>
  );
};

/* ---------- section ---------- */

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
      className="relative py-24 bg-white dark:bg-black overflow-hidden transition-colors"
    >
      {/* Accents */}
      <div className="absolute -top-40 -left-40 w-[380px] h-[380px] bg-gray-200 dark:bg-gray-800 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -right-40 w-[380px] h-[380px] bg-gray-100 dark:bg-gray-900 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-6xl ml-auto lg:mr-16">
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Certifications
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Certifications & Language
          </h2>

          {/* FILTER TABS */}
          <div className="mt-8 flex flex-wrap gap-2">
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                      : "bg-gray-100 text-gray-600 dark:bg-neutral-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-800"
                  }`}
                >
                  {tab.label} <span className="opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* MASONRY GRID — natural staggered heights instead of a uniform grid */}
          <div className="mt-10 columns-2 sm:columns-3 lg:columns-4 gap-6">
            {filtered.map((item, index) => (
              <CertificateCard
                key={item.label}
                item={item}
                index={index}
                onSelect={setPreview}
              />
            ))}
          </div>

          {/* LANGUAGE */}
          <div className="mt-24 max-w-3xl ml-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Language
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-100">
                  Bahasa Indonesia
                </span>{" "}
                — Native
              </li>

              <li>
                <span className="font-medium text-gray-800 dark:text-gray-100">
                  English
                </span>{" "}
                — TOEFL ITP 547
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MODAL PREVIEW */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-neutral-900 rounded-2xl p-4 max-w-4xl w-full"
          >
            <button
              onClick={() => setPreview(null)}
              aria-label="Close preview"
              className="absolute -top-3 -right-3 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg hover:scale-110 transition"
            >
              ✕
            </button>
            <img
              src={preview}
              alt="Certificate Preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;