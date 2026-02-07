import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative py-24 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* RIGHT SOFT BACKGROUND ACCENT */}
      <div
        className="absolute -top-40 -right-40 w-[360px] h-[360px]
                   bg-gray-200 rounded-full blur-3xl opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-5xl ml-auto lg:mr-16">

          {/* Section Label */}
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Projects
          </span>

          {/* Title */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Selected Projects
          </h2>

          {/* Divider */}
          <div className="mt-4 w-14 h-[2px] bg-gray-900" />

          {/* Projects Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Project 1 */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="border border-gray-200 p-8 transition
                         hover:border-gray-900 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Smart Door Lock IoT System
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                ESP32-CAM–based smart door lock system using face recognition
                for secure and automated access control. Integrated camera input,
                relay control, and authentication logic.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Tech: ESP32-CAM, IoT Hardware, Embedded System
              </p>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4, delay: 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="border border-gray-200 p-8 transition
                         hover:border-gray-900 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Vanda Dimension Properti
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Business landing page for a property company, designed with a
                clean UI and responsive layout to support online marketing
                and brand presence.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Tech: HTML, CSS, JavaScript
              </p>
              <a
                href="https://vanda-gules.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-medium text-gray-900 underline"
              >
                View Live Demo
              </a>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="border border-gray-200 p-8 transition
                         hover:border-gray-900 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Registration & Landing Page System
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Web-based registration system and landing page developed as a
                capstone project. Responsible for project coordination and
                delivery alignment.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Tech: Web Application, Frontend–Backend Integration
              </p>
              <a
                href="https://github.com/jonathanborta/projectproteinbaru.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-medium text-gray-900 underline"
              >
                View GitHub Repository
              </a>
            </motion.div>

            {/* Project 4 */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4, delay: 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="border border-gray-200 p-8 transition
                         hover:border-gray-900 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Travel Kuy — Travel Booking Web App
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Academic group project for building a travel booking web
                application that allows users to browse travel packages
                and submit reservations.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Tech: Web Application, Backend Logic, Database
              </p>
              <a
                href="https://github.com/Chaerozi/APB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-medium text-gray-900 underline"
              >
                View GitHub Repository
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
