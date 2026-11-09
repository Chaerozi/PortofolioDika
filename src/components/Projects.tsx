import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import khaProject from "../assets/Projects/Khadijah.png";
import ktProject from "../assets/Projects/Bimbel.png";
import vandaProject from "../assets/Projects/Vanda.png";
import espProject from "../assets/Projects/Diskom.png";
import travelProject from "../assets/images/Travel.png";
import paperProject from "../assets/images/paper.png";
import aquoraProject from "../assets/Projects/Aquora.png";
import agriProject from "../assets/Projects/Agriwijaya.png";
import network from "../assets/Projects/Netwrok.png";
import webServerProject from "../assets/Projects/WebServer.png";

/* ---------- TYPES & DATA ---------- */
type ProjectType = "Client Project" | "Academic Project" | "Research Project";

interface Project {
  img: string;
  title: string;
  desc: string;
  tech: string;
  type: ProjectType;
  github?: string;
  live?: string;
  publication?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    img: aquoraProject,
    title: "Aquora - Smart Water Monitoring System",
    desc: "IoT-based water monitoring system with real-time dashboard, billing management, and environmental monitoring features.",
    tech: "React - Node.js - PostgreSQL - IoT",
    type: "Client Project",
    github: "https://github.com/Chaerozi/TA",
    live: "https://smartwaterfe.l-prepaid.com/",
    featured: true,
  },
  {
    img: khaProject,
    title: "Khadijah Preschool Website",
    desc: "Responsive preschool website with online registration, payment integration, and program information management.",
    tech: "React - Tailwind CSS - Payment Gateway",
    type: "Client Project",
    github: "https://github.com/Chaerozi/Khadijah-Landing",
    live: "https://khadijah-landing-stage.pacemodddd-dev.me/",
  },
  {
    img: ktProject,
    title: "Rumah Sukses Tutoring Website",
    desc: "Educational platform with online registration, program management, and responsive user experience.",
    tech: "React - Node.js - Tailwind CSS",
    type: "Client Project",
    github: "https://github.com/Chaerozi/Bimbel",
    live: "https://rumahsukses-stage.pacemodddd-dev.me/",
  },
  {
    img: espProject,
    title: "Smart Door Lock IoT System",
    desc: "ESP32-CAM based smart door lock system with face recognition for secure and automated access control.",
    tech: "ESP32-CAM - IoT - Embedded System",
    type: "Client Project",
  },
  {
    img: vandaProject,
    title: "Vanda Dimension Properti",
    desc: "Company profile and property business landing page focused on modern branding and responsive design.",
    tech: "React - TypeScript - Tailwind CSS",
    type: "Client Project",
    live: "https://vandaa.vercel.app/",
  },
  {
    img: agriProject,
    title: "PT Agri Wijaya Spice Website",
    desc: "Corporate website for an Indonesian spice company featuring a modern company profile, product showcase, and responsive user experience.",
    tech: "React - TypeScript - Tailwind CSS - PostgreSQL",
    type: "Client Project",
    live: "https://logis-alpha-eight.vercel.app/",
  },
  {
    img: travelProject,
    title: "Travel Kuy - Travel Booking App",
    desc: "Travel booking application with backend integration and database management.",
    tech: "Flutter - Backend - Database",
    type: "Academic Project",
    github: "https://github.com/Chaerozi/APB",
    featured: true,
  },
  {
    img: webServerProject,
    title: "Python HTTP Web Server & Client",
    desc: "Built a lightweight HTTP client-server application using Python Socket Programming with TCP communication.",
    tech: "Python - Socket Programming - TCP/IP",
    type: "Academic Project",
    github: "https://github.com/Chaerozi/Jarkom",
  },
  {
    img: network,
    title: "Wireless Sensor Network Simulation",
    desc: "Built and evaluated a wireless sensor network simulation with 100% node connectivity.",
    tech: "Contiki OS - Cooja - IoT - WSN",
    type: "Academic Project",
  },
  {
    img: paperProject,
    title: "Smart Farming ML Model",
    desc: "Machine learning model for smart farming actuator optimization using IoT data analysis. Published at ICIC 2025.",
    tech: "Python - Machine Learning - IoT",
    type: "Research Project",
    github: "https://github.com/Chaerozi/notebook-smart_farming_model.ipynb",
    publication: "https://ieeexplore.ieee.org/document/11309530",
    featured: true,
  },
];

/* ---------- CONFIG ---------- */
const VISIBLE_RANGE = 3; // kartu di luar jarak ini tidak dirender sama sekali
const SWIPE_THRESHOLD = 50; // px

/* ---------- ICONS ---------- */
const stroke = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconExternal = () => (
  <svg {...stroke}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconGithub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.71 5.42-5.29 5.7.42.36.78 1.08.78 2.18v3.23c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
  </svg>
);

const IconPaper = () => (
  <svg {...stroke}>
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
    <path d="M9 13h6M9 17h6" />
  </svg>
);

/* ---------- SMALL COMPONENTS ---------- */
const linkBase =
  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-colors";

const linkStyles = {
  outline:
    "border border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10",
  solid:
    "bg-gray-900 dark:bg-white text-white dark:text-black hover:opacity-80",
  accent:
    "border border-blue-500/50 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white",
};

const ProjectLink = ({
  href,
  variant,
  icon,
  children,
}: {
  href: string;
  variant: keyof typeof linkStyles;
  icon: ReactNode;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${linkBase} ${linkStyles[variant]}`}
  >
    {icon}
    {children}
  </a>
);

const NavButton = ({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "prev" ? "Previous project" : "Next project"}
    className="w-10 h-10 shrink-0 rounded-full border border-gray-300 dark:border-neutral-700 flex items-center justify-center text-gray-500 dark:text-neutral-400 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-400 dark:hover:text-white dark:hover:bg-neutral-800 dark:hover:border-white disabled:opacity-20 disabled:pointer-events-none transition-colors"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={direction === "prev" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  </button>
);

/* ---------- CAROUSEL CARD ---------- */
const getTransform = (offset: number) => {
  if (offset === 0) return "translate3d(0,0,80px)";
  const sign = Math.sign(offset);
  const abs = Math.abs(offset);
  const x = sign * (40 + (abs - 1) * 15);
  return `translate3d(${x}%,0,${-abs * 120}px) rotateY(${-sign * 45}deg)`;
};

interface CardProps {
  project: Project;
  offset: number;
  onSelect: () => void;
}

const Card = memo(({ project, offset, onSelect }: CardProps) => {
  const isActive = offset === 0;

  return (
    <button
      type="button"
      tabIndex={isActive ? -1 : 0}
      aria-label={isActive ? project.title : `Show ${project.title}`}
      aria-current={isActive}
      onClick={isActive ? undefined : onSelect}
      className={`absolute w-[280px] md:w-[480px] h-[200px] md:h-[320px] p-0 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none will-change-transform ${
        isActive
          ? "cursor-default shadow-[0_15px_25px_rgba(0,0,0,0.15)] dark:shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          : "cursor-pointer"
      }`}
      style={{
        transform: getTransform(offset),
        zIndex: 50 - Math.abs(offset),
        // Refleksi hanya di kartu aktif supaya render tetap ringan
        WebkitBoxReflect: isActive
          ? "below 5px linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.4))"
          : undefined,
      }}
    >
      <img
        src={project.img}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
        className="w-full h-full object-cover object-center"
      />
    </button>
  );
});
Card.displayName = "Card";

/* ---------- MAIN COMPONENT ---------- */
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));
  const startX = useRef<number | null>(null);

  const last = projects.length - 1;
  const goTo = useCallback(
    (i: number) => setActiveIndex(Math.min(Math.max(i, 0), last)),
    [last]
  );
  const prev = useCallback(() => setActiveIndex((i) => Math.max(i - 1, 0)), []);
  const next = useCallback(() => setActiveIndex((i) => Math.min(i + 1, last)), [last]);

  // Navigasi keyboard
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // Swipe / drag sederhana
  const onPointerDown = (e: PointerEvent) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    dx < 0 ? next() : prev();
  };

  // Preload gambar proyek tetangga agar transisi mulus
  useEffect(() => {
    [activeIndex - 1, activeIndex + 1].forEach((i) => {
      if (projects[i]) new Image().src = projects[i].img;
    });
  }, [activeIndex]);

  const active = projects[activeIndex];

  return (
    <section
      id="projects"
      className="relative py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500 min-h-screen overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-[90rem] mx-auto w-full px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-gray-900 dark:text-white">
            Selected Projects
          </h2>
          <p className="text-gray-500 dark:text-[#888888] max-w-sm text-sm leading-relaxed md:text-right">
            A showcase of client, academic, and research projects. Swipe or use the arrows to look around.
          </p>
        </div>

        {/* 3D Carousel */}
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Selected projects"
          onKeyDown={handleKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (startX.current = null)}
          className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center mb-32 touch-pan-y select-none"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            if (Math.abs(offset) > VISIBLE_RANGE) return null;
            return (
              <Card
                key={project.title}
                project={project}
                offset={offset}
                onSelect={() => goTo(index)}
              />
            );
          })}
        </div>

        {/* Info & Links */}
        <div className="flex flex-col items-center justify-center mt-8">
          <h3
            aria-live="polite"
            className="text-2xl font-serif text-gray-900 dark:text-[#e8e4d9] mb-4 text-center"
          >
            {active.title}
          </h3>

          <div className="flex items-center gap-6 mb-6">
            <NavButton direction="prev" disabled={activeIndex === 0} onClick={prev} />
            <p className="text-sm text-center text-gray-600 dark:text-[#888888]">
              <span className="text-gray-900 dark:text-gray-300 font-medium">{active.type}</span>
              , {active.tech}
            </p>
            <NavButton direction="next" disabled={activeIndex === last} onClick={next} />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {active.live && (
              <ProjectLink href={active.live} variant="outline" icon={<IconExternal />}>
                Live Demo
              </ProjectLink>
            )}
            {active.github && (
              <ProjectLink href={active.github} variant="solid" icon={<IconGithub />}>
                GitHub
              </ProjectLink>
            )}
            {active.publication && (
              <ProjectLink href={active.publication} variant="accent" icon={<IconPaper />}>
                Publication
              </ProjectLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;