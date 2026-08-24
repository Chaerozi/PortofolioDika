import { useEffect, useRef, useState } from "react";
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

type ProjectType = "Client Project" | "Academic Project" | "Research Project";

interface Project {
  img: string;
  title: string;
  desc: string;
  tech: string;
  type: ProjectType;
  github: string;
  live: string;
  publication: string;
  imageClass: string;
  /** Renders as a larger, wide "spotlight" card in the bento grid */
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
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
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
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
  },
  {
    img: ktProject,
    title: "Rumah Sukses Tutoring Website",
    desc: "Educational platform with online registration, program management, and responsive user experience.",
    tech: "React - Node.js - Tailwind CSS",
    type: "Client Project",
    github: "https://github.com/Chaerozi/Bimbel",
    live: "https://rumahsukses-stage.pacemodddd-dev.me/",
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
  },
  {
    img: espProject,
    title: "Smart Door Lock IoT System",
    desc: "ESP32-CAM based smart door lock system with face recognition for secure and automated access control.",
    tech: "ESP32-CAM - IoT - Embedded System",
    type: "Client Project",
    github: "",
    live: "",
    publication: "",
    imageClass: "object-contain object-center scale-[0.9]",
  },
  {
    img: vandaProject,
    title: "Vanda Dimension Properti",
    desc: "Company profile and property business landing page focused on modern branding and responsive design.",
    tech: "React - TypeScript - Tailwind CSS",
    type: "Client Project",
    github: "",
    live: "https://vandaa.vercel.app/",
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
  },
  {
    img: agriProject,
    title: "PT Agri Wijaya Spice Website",
    desc: "Corporate website for an Indonesian spice company featuring a modern company profile, product showcase, and responsive user experience to strengthen the company's digital presence.",
    tech: "React - TypeScript - Tailwind CSS - postgreSQL",
    type: "Client Project",
    github: "",
    live: "https://logis-alpha-eight.vercel.app/",
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
  },
  {
    img: travelProject,
    title: "Travel Kuy - Travel Booking App",
    desc: "Travel booking application with backend integration and database management.",
    tech: "Flutter - Backend - Database",
    type: "Academic Project",
    github: "https://github.com/Chaerozi/APB",
    live: "",
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
    featured: true,
  },
  {
    img: webServerProject,
    title: "Python HTTP Web Server & Client",
    desc: "Built a lightweight HTTP client-server application using Python Socket Programming with TCP communication, HTTP GET request handling, and static HTML file serving without web frameworks.",
    tech: "Python - Socket Programming - TCP/IP - HTTP",
    type: "Academic Project",
    github: "https://github.com/Chaerozi/Jarkom",
    live: "",
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
  },
  {
    img: network,
    title: "Wireless Sensor Network Simulation",
    desc: "Built and evaluated a wireless sensor network simulation with 100% node connectivity, efficient routing, low packet loss, and power consumption analysis using Contiki Cooja.",
    tech: "Contiki OS - Cooja - IoT - Wireless Sensor Network",
    type: "Academic Project",
    github: "",
    live: "",
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
  },
  {
    img: paperProject,
    title: "Smart Farming ML Model",
    desc: "Machine learning model for smart farming actuator optimization using IoT data analysis. Published as a Scopus-indexed conference paper and presented at ICIC 2025.",
    tech: "Python - Machine Learning - IoT",
    type: "Research Project",
    github: "https://github.com/Chaerozi/notebook-smart_farming_model.ipynb",
    live: "",
    publication: "https://ieeexplore.ieee.org/document/11309530",
    imageClass: "object-contain object-center scale-[0.92]",
    featured: true,
  },
];

const sectionOrder: ProjectType[] = [
  "Client Project",
  "Academic Project",
  "Research Project",
];

const sectionLabels: Record<ProjectType, string> = {
  "Client Project": "Client Projects",
  "Academic Project": "Academic Projects",
  "Research Project": "Research Projects",
};

const typeStyles: Record<ProjectType, { badge: string; dot: string }> = {
  "Client Project": {
    badge: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  "Academic Project": {
    badge: "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
    dot: "bg-violet-500",
  },
  "Research Project": {
    badge: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
    dot: "bg-amber-500",
  },
};

/* ---------- tiny inline icons (no extra deps) ---------- */

const IconExternal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
    <path d="M9 13h6M9 17h6" />
  </svg>
);

/* ---------- scroll-reveal hook ---------- */

function useInView<T extends HTMLElement>(threshold = 0.15) {
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

/* ---------- link buttons shared between card variants ---------- */

const ProjectLinks = ({ project }: { project: Project }) => (
  <>
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-gray-900 dark:border-white px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
      >
        <IconExternal /> Live Demo
      </a>
    )}
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black hover:opacity-80 transition"
      >
        <IconGithub /> GitHub
      </a>
    )}
    {project.publication && (
      <a
        href={project.publication}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-blue-500 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-500 hover:text-white transition"
      >
        <IconPaper /> Publication
      </a>
    )}
  </>
);

/* ---------- large "spotlight" card ---------- */

const FeaturedCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style = typeStyles[project.type];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
      className={`group relative md:col-span-2 overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="grid md:grid-cols-2">
        <div className="relative h-[240px] md:h-full min-h-[280px] overflow-hidden bg-gray-100 dark:bg-neutral-900">
          <img
            src={project.img}
            alt={project.title}
            className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${project.imageClass}`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        </div>

        <div className="p-8 flex flex-col justify-center">
          <span className={`w-fit inline-flex items-center text-xs font-medium px-3 py-1 rounded-full ${style.badge}`}>
            {project.type}
          </span>

          <h3 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.desc}
          </p>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
            {project.tech}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- compact card ---------- */

const StandardCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style = typeStyles[project.type];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
      className={`group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-none ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative h-[220px] overflow-hidden bg-gray-100 dark:bg-neutral-900">
        <img
          src={project.img}
          alt={project.title}
          className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 ${project.imageClass}`}
        />

        {/* quick links: always visible on touch, revealed on hover for pointer devices */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 text-gray-900 dark:text-white backdrop-blur hover:scale-110 transition"
            >
              <IconExternal />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 text-gray-900 dark:text-white backdrop-blur hover:scale-110 transition"
            >
              <IconGithub />
            </a>
          )}
          {project.publication && (
            <a
              href={project.publication}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Publication"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 text-blue-600 backdrop-blur hover:scale-110 transition"
            >
              <IconPaper />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <span className={`inline-flex items-center text-xs font-medium px-3 py-1 rounded-full ${style.badge}`}>
          {project.type}
        </span>

        <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white leading-snug">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
          {project.desc}
        </p>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 font-mono">
          {project.tech}
        </p>
      </div>
    </div>
  );
};

/* ---------- section ---------- */

const filterTabs: { label: string; value: ProjectType | "All" }[] = [
  { label: "All", value: "All" },
  ...sectionOrder.map((t) => ({ label: sectionLabels[t], value: t })),
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "All">("All");

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400">
            Projects
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Selected Projects
          </h2>
        </div>

        {/* filter tabs replace the old stacked section headers */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filterTabs.map((tab) => {
            const count =
              tab.value === "All"
                ? projects.length
                : projects.filter((p) => p.type === tab.value).length;
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

        {/* bento grid: featured cards span two columns, standard cards fill the rest */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, index) =>
            project.featured ? (
              <FeaturedCard key={project.title} project={project} index={index} />
            ) : (
              <StandardCard key={project.title} project={project} index={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;