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
  },
  {
  img: webServerProject,
  title: "Python HTTP Web Server & Client",
  desc: "Built a lightweight HTTP client-server application using Python Socket Programming with TCP communication, HTTP GET request handling, and static HTML file serving without web frameworks.",
  tech: "Python • Socket Programming • TCP/IP • HTTP",
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

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 transition duration-300 hover:-translate-y-1">
    <div className="flex items-center justify-center h-[260px] md:h-[320px] overflow-hidden bg-gray-100 dark:bg-neutral-900">
      <img
        src={project.img}
        alt={project.title}
        className={"w-full h-full transition-transform duration-500 group-hover:scale-[1.02] " + project.imageClass}
      />
    </div>

    <div className="p-6">
      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-300">
        {project.type}
      </span>

      <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
        {project.desc}
      </p>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        {project.tech}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-gray-900 dark:border-white px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Live Demo
          </a>
        ) : null}

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black hover:opacity-80 transition"
          >
            GitHub
          </a>
        ) : null}

        {project.publication ? (
          <a
            href={project.publication}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-blue-500 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-500 hover:text-white transition"
          >
            Publication
          </a>
        ) : null}
      </div>
    </div>
  </div>
);

const Projects = () => {
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

        {sectionOrder.map((type) => {
          const items = projects.filter((p) => p.type === type);
          if (items.length === 0) return null;

          return (
            <div key={type} className="mt-16">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                {sectionLabels[type]}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {items.map((project, index) => (
                  <ProjectCard key={type + "-" + index} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;