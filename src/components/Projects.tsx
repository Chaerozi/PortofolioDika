import khaProject from "../assets/Projects/Khadijah.png";
import ktProject from "../assets/Projects/Bimbel.png";
import vandaProject from "../assets/Projects/Vanda.png";
import espProject from "../assets/images/Esp.png";
import travelProject from "../assets/images/Travel.png";
import pProject from "../assets/images/p.png";
import paperProject from "../assets/images/paper.png";
import aquoraProject from "../assets/Projects/Aquora.png";

const projects = [
  {
    img: aquoraProject,
    title: "Aquora — Smart Water Monitoring System",
    desc: "IoT-based water monitoring system with real-time dashboard, billing management, and environmental monitoring features.",
    tech: "React • Node.js • PostgreSQL • IoT",
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
    tech: "React • Tailwind CSS • Payment Gateway",
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
    tech: "React • Node.js • MySQL",
    type: "Client Project",
    github: "https://github.com/Chaerozi/Bimbel",
    live: "https://rumahsukses-stage.pacemodddd-dev.me/",
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
  },
  {
    img: espProject,
    title: "Smart Door Lock IoT System",
    desc: "ESP32-CAM–based smart door lock system with face recognition for secure and automated access control.",
    tech: "ESP32-CAM • IoT • Embedded System",
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
    tech: "React • TypeScript • Tailwind CSS",
    type: "Client Project",
    github: "",
    live: "https://vandaa.vercel.app/",
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
  },
  {
    img: travelProject,
    title: "Travel Kuy — Travel Booking App",
    desc: "Travel booking application with backend integration and database management.",
    tech: "Flutter • Backend • Database",
    type: "Academic Project",
    github: "https://github.com/Chaerozi/APB",
    live: "",
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
  },
  {
    img: pProject,
    title: "Registration & Landing Page System",
    desc: "Web-based registration system with frontend and backend integration.",
    tech: "Web App • Fullstack Development",
    type: "Academic Project",
    github: "https://github.com/jonathanborta/projectproteinbaru.git",
    live: "",
    publication: "",
    imageClass: "object-contain object-center scale-[0.92]",
  },
  {
    img: paperProject,
    title: "Smart Farming ML Model",
    desc: "Machine learning model for smart farming actuator optimization using IoT data analysis. Published as a Scopus-indexed conference paper and presented at ICIC 2025.",
    tech: "Python • Machine Learning • IoT",
    type: "Research Project",
    github: "https://github.com/Chaerozi/notebook-smart_farming_model.ipynb",
    live: "",
    publication: "https://ieeexplore.ieee.org/document/11309530",
    imageClass: "object-contain object-center scale-[0.92]",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400">
            Projects
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Selected Projects
          </h2>

          <div className="mt-4 w-12 h-[2px] bg-gray-900 dark:bg-white" />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group overflow-hidden rounded-3xl
                border border-gray-200 dark:border-gray-800
                bg-white dark:bg-neutral-950
                transition duration-300
                hover:-translate-y-1
              "
            >
              <div
                className="
                  flex items-center justify-center
                  h-[260px] md:h-[320px]
                  overflow-hidden
                  bg-gray-100 dark:bg-neutral-900
                "
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className={`
                    w-full h-full
                    transition-transform duration-500
                    group-hover:scale-[1.02]
                    ${project.imageClass}
                  `}
                />
              </div>

              <div className="p-6">
                <span
                  className="
                    text-xs px-3 py-1 rounded-full
                    bg-gray-100 dark:bg-neutral-900
                    text-gray-600 dark:text-gray-300
                  "
                >
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
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center
                        rounded-full
                        border border-gray-900 dark:border-white
                        px-4 py-2
                        text-sm font-medium
                        text-gray-900 dark:text-white
                        hover:bg-gray-900 hover:text-white
                        dark:hover:bg-white dark:hover:text-black
                        transition
                      "
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center
                        rounded-full
                        bg-gray-900 dark:bg-white
                        px-4 py-2
                        text-sm font-medium
                        text-white dark:text-black
                        hover:opacity-80
                        transition
                      "
                    >
                      GitHub
                    </a>
                  )}

                  {project.publication && (
                    <a
                      href={project.publication}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center
                        rounded-full
                        border border-blue-500
                        px-4 py-2
                        text-sm font-medium
                        text-blue-600
                        hover:bg-blue-500
                        hover:text-white
                        transition
                      "
                    >
                      Publication
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;