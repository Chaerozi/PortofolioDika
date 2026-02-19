import { motion } from "framer-motion";
import khaProject from "../assets/images/Kha.png";
import ktProject from "../assets/images/kt.png";
import vandaProject from "../assets/images/Vanda.png";
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
  className="group border border-gray-200 overflow-hidden transition
             hover:border-gray-900 hover:shadow-xl"
>

  {/* IMAGE */}
  <div className="w-full aspect-[4/3] bg-gray-50 overflow-hidden">
    <img
      src={espProject}
      alt="Smart Door Lock IoT System"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    />
  </div>

  {/* CONTENT */}
  <div className="p-8">
    <h3 className="text-xl font-semibold text-gray-900">
      Smart Door Lock IoT System
    </h3>

    <p className="mt-4 text-gray-600 leading-relaxed">
      Developed an ESP32-CAM–based smart door lock system utilizing
      face recognition for secure and automated access control.
      Integrated camera input, relay control, and authentication logic.
    </p>

    <p className="mt-4 text-sm text-gray-500">
      ESP32-CAM • IoT Hardware • Embedded System
    </p>
  </div>
</motion.div>


  {/* Project 2 */}
<motion.div
  variants={fadeUp}
  transition={{ duration: 0.4, delay: 0.05 }}
  whileHover={{ scale: 1.03 }}
  className="group border border-gray-200 overflow-hidden transition
             hover:border-gray-900 hover:shadow-xl"
>

  {/* IMAGE */}
  <div className="w-full aspect-[4/3] bg-gray-50 overflow-hidden">
    <img
      src={vandaProject}
      alt="Vanda Dimension Properti"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    />
  </div>

  {/* CONTENT */}
  <div className="p-8">
    <h3 className="text-xl font-semibold text-gray-900">
      Vanda Dimension Properti
    </h3>

    <p className="mt-4 text-gray-600 leading-relaxed">
      Developed a responsive business landing page for a property company,
      focusing on clean UI design and optimized layout to strengthen
      online marketing presence.
    </p>

    <p className="mt-4 text-sm text-gray-500">
      HTML • CSS • JavaScript
    </p>

    <a
      href="https://vanda-gules.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-6 text-sm font-medium
                 px-4 py-2 border border-gray-900 text-gray-900
                 hover:bg-gray-900 hover:text-white transition"
    >
      View Live Demo
    </a>
  </div>
</motion.div>

{/* Project 3 */}
<motion.div
  variants={fadeUp}
  transition={{ duration: 0.4, delay: 0.1 }}
  whileHover={{ scale: 1.03 }}
  className="group border border-gray-200 overflow-hidden transition
             hover:border-gray-900 hover:shadow-xl"
>

  {/* IMAGE */}
  <div className="w-full aspect-[4/3] bg-gray-50 overflow-hidden">
    <img
      src={pProject}
      alt="Registration & Landing Page System"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    />
  </div>

  {/* CONTENT */}
  <div className="p-8">
    <h3 className="text-xl font-semibold text-gray-900">
      Registration & Landing Page System
    </h3>

    <p className="mt-4 text-gray-600 leading-relaxed">
      Developed a web-based registration and landing page system as a
      capstone project. Responsible for project coordination,
      frontend–backend integration, and delivery alignment.
    </p>

    <p className="mt-4 text-sm text-gray-500">
      Web Application • Frontend–Backend Integration
    </p>

    <a
      href="https://github.com/jonathanborta/projectproteinbaru.git"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-6 text-sm font-medium
                 px-4 py-2 border border-gray-900 text-gray-900
                 hover:bg-gray-900 hover:text-white transition"
    >
      View GitHub Repository
    </a>
  </div>
</motion.div>



           {/* Project 4 */}
<motion.div
  variants={fadeUp}
  transition={{ duration: 0.4, delay: 0.15 }}
  whileHover={{ scale: 1.03 }}
  className="group border border-gray-200 overflow-hidden transition
             hover:border-gray-900 hover:shadow-xl"
>

  {/* IMAGE */}
  <div className="w-full aspect-[4/3] bg-gray-50 overflow-hidden">
    <img
      src={travelProject}
      alt="Travel Kuy Web App"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    />
  </div>

  {/* CONTENT */}
  <div className="p-8">
    <h3 className="text-xl font-semibold text-gray-900">
      Travel Kuy — Travel Booking Web App
    </h3>

    <p className="mt-4 text-gray-600 leading-relaxed">
      Developed a travel booking web application allowing users to
      explore travel packages and submit reservations. Implemented
      backend logic and database integration for booking management.
    </p>

    <p className="mt-4 text-sm text-gray-500">
      Flutter • Backend Logic • Database
    </p>

    <a
      href="https://github.com/Chaerozi/APB"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-6 text-sm font-medium
                 px-4 py-2 border border-gray-900 text-gray-900
                 hover:bg-gray-900 hover:text-white transition"
    >
      View GitHub Repository
    </a>
  </div>
</motion.div>

        <motion.section
  id="projects"
  className="py-28 bg-gray-50"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeUp}
>
  <div className="max-w-5xl mx-auto px-6">

    {/* IMAGE PREVIEW */}
<div className="flex justify-center">
  <div
    className="w-full max-w-3xl 
               aspect-[4/5] 
               bg-white 
               rounded-3xl 
               shadow-2xl 
               overflow-hidden 
               flex items-center justify-center"
  >
    <img
      src={khaProject}
      alt="Khadijah Preschool"
      className="w-full h-full object-contain p-10"
    />
  </div>
</div>


    {/* CONTENT */}
    <div className="text-center mt-16">

      {/* Title */}
      <h2 className="mt-8 text-xl font-semibold text-gray-900">
        Khadijah Preschool —
        <br />
        Landing & Registration System
      </h2>

      {/* Description */}
      <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
        Production-ready preschool website featuring landing page optimization,
        student enrollment system, and secure payment gateway integration.
      </p>

      {/* Tech Stack */}
      <p className="mt-6 text-sm text-gray-500">
        React • TypeScript • Tailwind • Backend • Payment Gateway
      </p>

      {/* Buttons */}
      <div className="mt-12 flex justify-center gap-6 flex-wrap">
        <a
          href="#"
          className="px-8 py-4 bg-black text-white text-sm font-medium
                     rounded-2xl hover:bg-gray-800 transition"
        >
          View Live Demo
        </a>

        <a
          href="#"
          className="px-8 py-4 border border-gray-900 text-sm font-medium
                     rounded-2xl hover:bg-gray-900 hover:text-white transition"
        >
          View Admin Panel
        </a>
      </div>

    </div>
  </div>
</motion.section>
    
{/* Bimbel & Kursus Rumah Sukses */}
<motion.section
  className="py-28 bg-white"
  variants={fadeUp}
  transition={{ duration: 0.5 }}
>
  <div className="max-w-5xl mx-auto px-6">

    {/* IMAGE WRAPPER */}
<div className="flex justify-center">
  <div className="w-full max-w-3xl aspect-[4/5] 
                  bg-white rounded-3xl 
                  shadow-2xl overflow-hidden">

    <img
  src={ktProject}
  alt="Project Preview"
  className="w-full h-full object-contain p-10"
/>


  </div>
</div>


    {/* CONTENT */}
    <div className="text-center mt-16">


      {/* Title */}
      <h2 className="mt-8 text-xl font-semibold text-gray-900">
        Bimbel & Kursus Rumah Sukses —
        <br />
        Tutoring Center Website
      </h2>

      {/* Description */}
      <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
        Developed a fully responsive tutoring center website featuring
        online student registration, secure payment gateway integration,
        program management, testimonials, and document upload functionality.
        Designed with a warm educational branding to enhance parent trust
        and streamline enrollment processes.
      </p>

      {/* Tech Stack */}
      <p className="mt-6 text-sm text-gray-500">
        React • TypeScript • Tailwind • Backend Integration • Payment Gateway
      </p>

      {/* Buttons */}
      <div className="mt-12 flex justify-center gap-6 flex-wrap">
        <a
          href="#"
          className="px-8 py-4 bg-black text-white text-sm font-medium
                     rounded-2xl hover:bg-gray-800 transition"
        >
          View Live Demo
        </a>

        <a
          href="#"
          className="px-8 py-4 border border-gray-900 text-sm font-medium
                     rounded-2xl hover:bg-gray-900 hover:text-white transition"
        >
          View Admin Panel
        </a>
      </div>

    </div>
  </div>
</motion.section>



          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
