import { motion } from "framer-motion";
import AboutPhoto from "../assets/Foto/Foto.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#FAFAFA] py-24 md:py-32 dark:bg-[#0A0A0A] transition-colors duration-500"
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-900 dark:border-white pb-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-gray-900 dark:text-white leading-none">
            About.
          </h2>
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 pb-2">
            Telkom University // S1 IT
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-20 items-center">
          
          {/* Left Column: Typography / Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="order-2 md:order-1 md:col-span-7 lg:col-span-8 flex flex-col space-y-6 md:space-y-8"
          >
            {/* Lead Paragraph - Oversized Serif */}
            <p className="text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed text-gray-900 dark:text-[#e8e4d9]">
              Information Technology graduate from Telkom University, with a strong foundation in full-stack development, IoT systems, and technology infrastructure.
            </p>

            {/* Standard Paragraphs - Clean & Readable */}
            <div className="space-y-4 max-w-2xl text-[14px] md:text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                Experienced in building scalable web and IoT-based solutions through internships, freelance projects, and project leadership roles, using technologies such as React.js, TypeScript, Node.js, PostgreSQL, and Prisma ORM.
              </p>
              <p>
                Published a Scopus-indexed international conference paper (ICIC 2025) as first author, reflecting a habit of research, analytical thinking, and problem-solving in software engineering and technology-driven environments.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Premium Photo Treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="order-1 md:order-2 md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end"
          >
            <div className="group relative w-[220px] sm:w-[260px] md:w-full max-w-[320px]">
              {/* Image Container with Grayscale Reveal */}
              <div className="relative overflow-hidden bg-gray-200 dark:bg-[#111111] aspect-[3/4] rounded-sm">
                <img
                  src={AboutPhoto}
                  alt="Ardika Rahmad Septian"
                  className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100"
                />
                
                {/* Subtle Overlay to blend with background */}
                <div className="absolute inset-0 bg-gray-900/10 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Minimalist Editorial Caption */}
              <div className="mt-4 flex items-center justify-between border-t border-gray-200 dark:border-white/10 pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-900 dark:text-white">
                  Ardika
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                  IT Graduate
                </span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;