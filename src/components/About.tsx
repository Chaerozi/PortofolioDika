import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutPhoto from "../assets/Foto/Foto.png";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Efek parallax halus saat container about di-scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#FAFAFA] py-28 md:py-36 dark:bg-[#0A0A0A] transition-colors duration-700 overflow-hidden select-none"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        
        {/* Editorial Header dengan Animasi Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-900 dark:border-white/30 pb-6"
        >
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-gray-900 dark:text-white leading-none"
            >
              About.
            </motion.h2>
          </div>
          
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 pb-1"
          >
            Telkom University // S1 IT
          </motion.span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-20 items-center">
          
          {/* Left Column: Typography / Bio dengan Stagger Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1 md:col-span-7 lg:col-span-8 flex flex-col space-y-6 md:space-y-8"
          >
            {/* Lead Paragraph - Oversized Serif */}
            <p className="text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed text-gray-900 dark:text-[#e8e4d9]">
              Information Technology graduate from Telkom University, with a strong foundation in full-stack development, IoT systems, and technology infrastructure.
            </p>

            {/* Standard Paragraphs */}
            <div className="space-y-4 max-w-2xl text-[14px] md:text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 font-sans">
              <p>
                Experienced in building scalable web and IoT-based solutions through internships, freelance projects, and project leadership roles, using technologies such as React.js, TypeScript, Node.js, PostgreSQL, and Prisma ORM.
              </p>
              <p>
                Published a Scopus-indexed international conference paper (ICIC 2025) as first author, reflecting a habit of research, analytical thinking, and problem-solving in software engineering and technology-driven environments.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Premium Photo dengan Efek Parallax dan Reveal Mask */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2 md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end"
          >
            <div className="group relative w-[240px] sm:w-[280px] md:w-full max-w-[320px]">
              
              {/* Image Container dengan Efek Parallax Halus */}
              <div className="relative overflow-hidden bg-gray-200 dark:bg-[#111111] aspect-[3/4] rounded-sm shadow-2xl">
                <motion.img
                  style={{ y: photoY }}
                  src={AboutPhoto}
                  alt="Ardika Rahmad Septian"
                  className="h-[110%] w-full object-cover grayscale contrast-125 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gray-900/10 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Minimalist Editorial Caption */}
              <div className="mt-4 flex items-center justify-between border-t border-gray-300 dark:border-white/15 pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-900 dark:text-white font-semibold">
                  Ardika
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">
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