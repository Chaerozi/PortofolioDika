import { motion } from "framer-motion";
import khaProject from "../assets/images/Kha.png";
import ktProject from "../assets/images/kt.png";
import vandaProject from "../assets/images/VAnda.png";
import espProject from "../assets/images/Esp.png";
import travelProject from "../assets/images/Travel.png";
import pProject from "../assets/images/p.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative pt-32 pb-24 bg-white"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background Accent */}
      <div className="absolute -top-40 -right-40 w-[360px] h-[360px] bg-gray-200 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Projects
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Selected Projects
          </h2>

          <div className="mt-4 w-14 h-[2px] bg-gray-900" />

          {/* ================= GRID PROJECTS ================= */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-fr">

            {[{
              img: espProject,
              title: "Smart Door Lock IoT System",
              desc: "Developed an ESP32-CAM–based smart door lock system utilizing face recognition for secure and automated access control.",
              tech: "ESP32-CAM • IoT Hardware • Embedded System"
            },
            {
              img: vandaProject,
              title: "Vanda Dimension Properti",
              desc: "Developed a responsive business landing page focusing on clean UI design and marketing presence.",
              tech: "HTML • CSS • JavaScript",
              link: "https://vanda-gules.vercel.app/"
            },
            {
              img: pProject,
              title: "Registration & Landing Page System",
              desc: "Web-based registration and landing page system with frontend–backend integration.",
              tech: "Web Application • Frontend–Backend Integration",
              link: "https://github.com/jonathanborta/projectproteinbaru.git"
            },
            {
              img: travelProject,
              title: "Travel Kuy — Travel Booking Web App",
              desc: "Travel booking web application with backend logic and database integration.",
              tech: "Flutter • Backend Logic • Database",
              link: "https://github.com/Chaerozi/APB"
            }].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group border border-gray-200 overflow-hidden hover:border-gray-900 hover:shadow-xl transition flex flex-col h-full"
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed flex-1">
                    {project.desc}
                  </p>

                  <p className="mt-4 text-sm text-gray-500">
                    {project.tech}
                  </p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-sm font-medium px-4 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition"
                    >
                      View Repository
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= FEATURED PROJECTS ================= */}
          <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-16">

            {[{
              img: khaProject,
              title: "Khadijah Preschool — Landing & Registration System",
              desc: "Production-ready preschool website featuring landing page optimization and secure payment gateway integration."
            },
            {
              img: ktProject,
              title: "Bimbel & Kursus Rumah Sukses — Tutoring Center Website",
              desc: "Fully responsive tutoring center website with online registration and secure payment gateway integration."
            }].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Image */}
                <div className="aspect-[4/5] bg-white rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-contain p-8"
                  />
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-6 text-gray-600 leading-relaxed">
                    {project.desc}
                  </p>

                  <p className="mt-6 text-sm text-gray-500">
                    React • TypeScript • Tailwind • Backend • Payment Gateway
                  </p>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 px-6 py-3 border border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
                  >
                    View GitHub Repository
                  </a>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
