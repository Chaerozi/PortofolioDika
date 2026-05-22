import { motion } from "framer-motion";

import khaProject from "../assets/images/image3.png";
import ktProject from "../assets/images/image2.png";
import vandaProject from "../assets/images/VAnda.png";
import espProject from "../assets/images/Esp.png";
import travelProject from "../assets/images/Travel.png";
import pProject from "../assets/images/p.png";
import paperProject from "../assets/images/paper.png";
import aquoraProject from "../assets/images/image.png";

const projects = [
  {
    img: espProject,
    title: "Smart Door Lock IoT System",
    desc: "ESP32-CAM–based smart door lock system with face recognition for secure and automated access control.",
    tech: "ESP32-CAM • IoT • Embedded System",
    type: "Client Project",
    imageClass: "object-contain object-center scale-[0.9]",
  },

  {
    img: aquoraProject,
    title: "Aquora — Smart Water Monitoring System",
    desc: "IoT-based water monitoring system with real-time dashboard and environmental monitoring features.",
    tech: "IoT • Web Dashboard • Monitoring System",
    type: "Client Project",
    link: "https://github.com/Chaerozi/Tugas-Akhir-Water.git",
    imageClass: "object-contain object-center scale-[0.92]",
  },

  {
    img: khaProject,
    title: "Khadijah Preschool Website",
    desc: "Responsive preschool website with online registration and payment gateway integration.",
    tech: "React • Tailwind • Payment Gateway",
    type: "Client Project",
    link: "https://github.com/Chaerozi/Khadijah-Landing",
    imageClass: "object-contain object-center scale-[0.92]",
  },

  {
    img: ktProject,
    title: "Rumah Sukses Tutoring Website",
    desc: "Tutoring center website with online registration and responsive user interface.",
    tech: "React • Node.js • MySQL",
    type: "Client Project",
    link: "https://github.com/Chaerozi/Bimbel",
    imageClass: "object-contain object-center scale-[0.92]",
  },

  {
    img: vandaProject,
    title: "Vanda Dimension Properti",
    desc: "Business landing page focused on modern UI design and company branding.",
    tech: "React • TypeScript • Tailwind",
    type: "Client Project",
    link: "https://vanda-gules.vercel.app/",
    imageClass: "object-contain object-center scale-[0.92]",
  },

  {
    img: travelProject,
    title: "Travel Kuy — Travel Booking App",
    desc: "Travel booking application with backend integration and database management.",
    tech: "Flutter • Backend • Database",
    type: "Academic Project",
    link: "https://github.com/Chaerozi/APB",
    imageClass: "object-contain object-center scale-[0.92]",
  },

  {
    img: pProject,
    title: "Registration & Landing Page System",
    desc: "Web-based registration system with frontend and backend integration.",
    tech: "Web App • Fullstack Development",
    type: "Academic Project",
    link: "https://github.com/jonathanborta/projectproteinbaru.git",
    imageClass: "object-contain object-center scale-[0.92]",
  },

  {
    img: paperProject,
    title: "Smart Farming ML Model",
    desc: "Machine learning model for smart farming actuator optimization using IoT data analysis.",
    tech: "Python • Machine Learning • IoT",
    type: "Research Project",
    link: "https://github.com/Chaerozi/notebook-smart_farming_model.ipynb",
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
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400">
            Projects
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Selected Projects
          </h2>

          <div className="mt-4 w-12 h-[2px] bg-gray-900 dark:bg-white" />
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-3xl
                border border-gray-200 dark:border-gray-800
                bg-white dark:bg-neutral-950
                transition duration-300
                hover:-translate-y-1
              "
            >
              {/* Image */}
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
                    w-full
                    h-full
                    transition-transform duration-500
                    group-hover:scale-[1.02]
                    ${project.imageClass}
                  `}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="
                      text-xs
                      px-3 py-1
                      rounded-full
                      bg-gray-100 dark:bg-neutral-900
                      text-gray-600 dark:text-gray-300
                    "
                  >
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.desc}
                </p>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  {project.tech}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      mt-6
                      text-sm font-medium
                      text-gray-900 dark:text-white
                      hover:opacity-70
                      transition
                    "
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;