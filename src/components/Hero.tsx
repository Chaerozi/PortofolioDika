import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import ContactIcon from "../assets/images/contak.jpg";
import ProfilePhoto from "../assets/Foto/Setengah1.png";

const heading = { fontFamily: "'Archivo Black', sans-serif" };

// Style tipografi khusus untuk "PORTFOLIO"
const portfolioFontStyle = {
  fontFamily: "'Oswald', 'Impact', 'Archivo Black', sans-serif",
};

const stars = [
  [45, 35], [98, 80], [155, 42], [210, 115],
  [275, 65], [330, 25], [385, 95], [445, 48],
  [510, 105], [570, 35], [635, 75], [700, 25],
  [755, 110], [820, 55], [890, 95], [950, 40],
  [65, 180], [145, 220], [230, 165], [310, 245],
  [390, 190], [470, 220], [555, 165], [640, 245],
  [730, 185], [810, 225], [900, 175], [970, 250],
  [40, 320], [120, 370], [205, 310], [290, 390],
  [380, 340], [465, 410], [550, 330], [635, 390],
  [720, 310], [805, 380], [890, 330], [960, 400],
  [75, 480], [180, 530], [300, 470], [420, 550],
  [570, 485], [690, 540], [830, 475], [940, 535],
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.08, 0.85]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.5]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden bg-white dark:bg-[#080808] transition-colors pt-10 pb-16 md:pb-24 select-none"
    >
      {/* Star Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
          {stars.map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 5 === 0 ? 1 : 0.6}
              className="fill-gray-500 dark:fill-white"
              opacity={i % 3 === 0 ? 0.35 : 0.18}
            />
          ))}
        </svg>
      </div>

      {/* Decorative Wavy Lines */}
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[340px] opacity-[0.06] dark:opacity-[0.1] z-0"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
      >
        <path d="M0,150 C150,50 300,250 500,150 C700,50 850,250 1000,150" fill="none" stroke="currentColor" className="text-gray-900 dark:text-white" strokeWidth="1.5" />
        <path d="M0,190 C150,90 300,290 500,190 C700,90 850,290 1000,190" fill="none" stroke="currentColor" className="text-gray-900 dark:text-white" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Top Row */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs uppercase tracking-[0.25em] font-mono text-gray-500 dark:text-gray-400">
          <span>Dhika</span>
          <a
            href="https://wa.me/6282231695138"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Available
          </a>
        </div>

        {/* Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={heading}
          className="mt-6 md:mt-16 text-center text-base md:text-xl uppercase tracking-tight text-gray-900 dark:text-white"
        >
          Hi there, I&apos;m Dhika
        </motion.p>

        {/* COMPOSITION AREA */}
        <motion.div
          style={{ scale: photoScale, opacity: photoOpacity }}
          className="relative mt-8 md:mt-10 flex justify-center will-change-transform"
        >
          <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] flex items-center justify-center">

            {/* LAYER 1: Solid Text PORTFOLIO */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={portfolioFontStyle}
                className="whitespace-nowrap text-[clamp(4.5rem,15vw,10.5rem)] tracking-[-0.03em] uppercase leading-none text-[#E5D7BF] dark:text-[#E5D7BF] select-none"
              >
                PORTFOLIO
              </motion.h1>
            </div>

            {/* LAYER 2: Profile Photo */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              src={ProfilePhoto}
              alt="Ardika Rahmad Septian"
              className="relative z-10 w-[250px] sm:w-[300px] md:w-[340px] h-auto object-contain drop-shadow-2xl"
            />

            {/* LAYER 3: Outline Text PORTFOLIO */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <h1
                style={{
                  ...portfolioFontStyle,
                  WebkitTextStroke: "1.5px #E5D7BF",
                  color: "transparent",
                }}
                className="whitespace-nowrap text-[clamp(4.5rem,15vw,10.5rem)] tracking-[-0.03em] uppercase leading-none select-none"
              >
                PORTFOLIO
              </h1>
            </div>

            {/* LAYER 4: Circular Text */}
            <motion.svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full z-30 pointer-events-none"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <defs>
                <path id="circleTop" d="M 30,200 A 170,170 0 0 1 370,200" fill="none" />
                <path id="circleBottom" d="M 30,200 A 170,170 0 0 0 370,200" fill="none" />
                {/* Text shadow for better readability over outline */}
                <filter id="textShadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.7" />
                </filter>
              </defs>

              <text
                style={heading}
                className="fill-gray-900 dark:fill-white"
                filter="url(#textShadow)"
                fontSize="18"
                letterSpacing="2.5"
                textAnchor="middle"
              >
                <textPath href="#circleTop" startOffset="50%">
                  NETWORKING
                </textPath>
              </text>

              <text
                style={heading}
                className="fill-gray-900 dark:fill-white"
                filter="url(#textShadow)"
                fontSize="18"
                letterSpacing="2.5"
                textAnchor="middle"
              >
                <textPath href="#circleBottom" startOffset="50%">
                  WEB DEVELOPER &amp; MACHINE LEARNING
                </textPath>
              </text>
            </motion.svg>

            {/* Bottom Shadow */}
            <div className="absolute z-0 bottom-[13%] w-[150px] h-[14px] sm:w-[180px] sm:h-[16px] bg-gray-900/20 dark:bg-black/50 rounded-full blur-md" />

            {/* Side Gradients */}
            <div className="absolute z-0 left-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%] bg-gradient-to-r from-gray-900/10 dark:from-white/10 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="absolute z-0 right-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%] bg-gradient-to-l from-gray-900/10 dark:from-white/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          </div>
        </motion.div>

        {/* Description & Buttons */}
        <div className="mt-6 md:mt-8 flex flex-col items-center gap-6 text-center max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Fresh graduate in Information Technology focused on computer networking, with hands-on experience in network configuration, troubleshooting, web development, IoT, and machine learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/CV-Ardika-Rahmad-Septiann.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 text-sm font-medium transition hover:opacity-90"
            >
              <FiDownload />
              View CV
            </a>

            <a
              href="https://wa.me/6282231695138"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-100 px-6 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <img src={ContactIcon} alt="Contact" className="w-4 h-4 rounded-sm" />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;