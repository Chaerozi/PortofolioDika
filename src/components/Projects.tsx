import { motion } from "framer-motion";

import khaProject from "../assets/images/Kha.png";
import ktProject from "../assets/images/kt.png";
import vandaProject from "../assets/images/VAnda.png";
import espProject from "../assets/images/Esp.png";
import travelProject from "../assets/images/Travel.png";
import pProject from "../assets/images/p.png";
import paperProject from "../assets/images/paper.png";
import aquoraProject from "../assets/images/aquora.png";

const projects = [
  {
    img: espProject,
    title: "Smart Door Lock IoT System",
    desc: "Developed an ESP32-CAM–based smart door lock system utilizing face recognition for secure and automated access control.",
    tech: "ESP32-CAM • IoT Hardware • Embedded System",
    type: "Client Project",
  },
  {
    img: vandaProject,
    title: "Vanda Dimension Properti",
    desc: "Developed a responsive business landing page focusing on clean UI design and marketing presence.",
    tech: "React • TypeScript • Tailwind",
    type: "Client Project",
    link: "https://vanda-gules.vercel.app/",
  },
  {
    img: pProject,
    title: "Registration & Landing Page System",
    desc: "Web-based registration and landing page system with frontend–backend integration.",
    tech: "Web Application • Frontend–Backend Integration",
    type: "Academic Project",
    link: "https://github.com/jonathanborta/projectproteinbaru.git",
  },
  {
    img: travelProject,
    title: "Travel Kuy — Travel Booking Web App",
    desc: "Travel booking web application with backend logic and database integration.",
    tech: "Flutter • Backend Logic • Database",
    type: "Academic Project",
    link: "https://github.com/Chaerozi/APB",
  },
  {
    img: paperProject,
    title: "Smart Farming Machine Learning Model",
    desc: "Machine learning notebook for optimizing smart farming actuator systems using ensemble models and IoT data analysis.",
    tech: "Python • Machine Learning • IoT • Data Analysis",
    type: "Academic Project",
    link: "https://github.com/Chaerozi/notebook-smart_farming_model.ipynb",
  },
  {
  img: aquoraProject,
  title: "Aquora — Smart Water Monitoring System",
  desc: "IoT-based water monitoring system designed to track water usage and environmental conditions with real-time data visualization.",
  tech: "IoT • Embedded System • Web Dashboard",
  type: "Client Project",
  link: "https://github.com/Chaerozi/Tugas-Akhir-Water.git",
},
];

const featured = [
  {
    img: khaProject,
    title: "Khadijah Preschool — Landing & Registration System",
    desc: "Production-ready preschool website featuring landing page optimization and secure payment gateway integration.",
    type: "Client Project",
    link: "https://github.com/Chaerozi/Khadijah-Landing",
  },
  {
    img: ktProject,
    title: "Bimbel & Kursus Rumah Sukses — Tutoring Center Website",
    desc: "Fully responsive tutoring center website with online registration and secure payment gateway integration.",
    type: "Client Project",
    link: "https://github.com/Chaerozi/Bimbel",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative pt-28 pb-20 bg-white dark:bg-black overflow-hidden transition-colors"
    >
      <div className="absolute -top-40 -right-40 w-[360px] h-[360px] bg-gray-200 dark:bg-gray-800 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Projects
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Selected Projects
          </h2>

          <div className="mt-4 w-14 h-[2px] bg-gray-900 dark:bg-white" />

          {/* GRID PROJECTS */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="group border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white hover:shadow-xl transition flex flex-col bg-white dark:bg-neutral-900"
              >

                <div className="w-full aspect-[4/3] bg-gray-50 dark:bg-neutral-800 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">

                  <span className="inline-block w-fit text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {project.type}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
                    {project.desc}
                  </p>

                  <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    {project.tech}
                  </p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center mt-5 text-sm font-medium px-5 py-2.5 rounded-lg border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                    >
                      View Repository
                    </a>
                  )}

                </div>

              </motion.div>
            ))}

          </div>

          {/* FEATURED PROJECTS */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">

            {featured.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >

                <div className="aspect-[4/5] bg-white dark:bg-neutral-900 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-contain p-6"
                  />
                </div>

                <div className="mt-8">

                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {project.type}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.desc}
                  </p>

                  <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    React • TypeScript • Tailwind • Backend • Payment Gateway
                  </p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center mt-6 text-sm font-medium px-6 py-3 rounded-lg border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                    >
                      View Repository
                    </a>
                  )}

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;