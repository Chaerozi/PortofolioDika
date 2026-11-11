import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProfilePhoto from "../assets/Foto/Setengah1.png";
import BgImage from "../assets/Foto/bgg.svg"; 
import LoveIcon1 from "../assets/Foto/Love.svg";
import LoveIcon2 from "../assets/Foto/Love1.svg";

const portfolioFontStyle = {
  fontFamily: "'Oswald', 'Impact', 'Archivo Black', sans-serif",
};

const scriptFontStyle = {
  fontFamily: "'Caveat', 'Great Vibes', 'Brush Script MT', cursive",
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

  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.02, 0.95]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.6, 1, 1, 0.5]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 py-6 md:py-10 flex flex-col justify-between select-none min-h-[90vh]"
    >
      {/* --- ORNAMEN CETAK MAJALAH: CORNER CROP MARKS --- */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gray-400 dark:border-white/30 z-20 pointer-events-none" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gray-400 dark:border-white/30 z-20 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gray-400 dark:border-white/30 z-20 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gray-400 dark:border-white/30 z-20 pointer-events-none" />

      {/* 1. Background khusus Dark Mode (Gambar Monokrom bgg.svg) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden dark:block">
        <img
          src={BgImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-35 scale-105 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* 2. Star Background khusus Light Mode */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
          {stars.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 1 : 0.6} className="fill-gray-500" opacity={0.35} />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full flex flex-col flex-1 justify-between">

        {/* Top Header Row */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs uppercase tracking-[0.25em] font-mono text-gray-500 dark:text-gray-400">
          <span>IT SPECIALIST // 2026</span>
          <span className="tracking-[0.3em] font-semibold">BANDUNG, ID</span>
        </div>

        {/* --- MAGAZINE HERO STAGE --- */}
        <div className="relative my-auto flex items-center justify-center py-4">
          
          <div className="relative w-full max-w-5xl h-[420px] sm:h-[480px] md:h-[560px] flex items-center justify-center">

            {/* --- ORNAMEN ASSET LOVE SVG (Diperjelas & Diposisikan Pas) --- */}
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              src={LoveIcon1}
              alt="Love ornament"
              className="absolute left-6 sm:left-20 top-1/4 w-14 sm:w-20 h-auto opacity-80 dark:opacity-90 pointer-events-none rotate-[-15deg] filter drop-shadow-lg dark:brightness-200"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              src={LoveIcon2}
              alt="Love ornament"
              className="absolute right-6 sm:right-20 bottom-1/4 w-12 sm:w-16 h-auto opacity-80 dark:opacity-90 pointer-events-none rotate-[15deg] filter drop-shadow-lg dark:brightness-200"
            />

            {/* 1. Teks "PORTFOLIO" Raksasa di Belakang Kepala */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-x-0 top-[30%] -translate-y-1/2 flex items-center justify-center z-0 pointer-events-none"
            >
              <h1
                style={portfolioFontStyle}
                className="whitespace-nowrap text-[clamp(5rem,21vw,17rem)] tracking-[-0.03em] uppercase leading-none text-[#E5D7BF] dark:text-[#E5D7BF]/90 select-none drop-shadow-2xl"
              >
                PORTFOLIO
              </h1>
            </motion.div>

            {/* Coretan Sambung "My" di Samping Kiri Atas */}
            <div className="absolute left-4 sm:left-12 top-[10%] z-0 pointer-events-none hidden sm:block">
              <p style={scriptFontStyle} className="text-4xl md:text-5xl text-gray-400 dark:text-gray-500 italic rotate-[-10deg]">
                My
              </p>
            </div>

            {/* 2. Badge Nama "DHIKA" di Samping Kiri Foto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute left-2 sm:left-8 md:left-24 top-[35%] z-30 pointer-events-none flex items-center gap-3"
            >
              <div className="border border-gray-400/40 dark:border-white/30 bg-white/20 dark:bg-black/50 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-white" />
                <span className="font-mono text-xs sm:text-sm tracking-[0.3em] font-bold text-gray-900 dark:text-white uppercase">
                  DHIKA
                </span>
              </div>
            </motion.div>

            {/* Badge Tahun di Samping Kanan Foto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute right-2 sm:right-8 md:right-24 top-[45%] z-30 pointer-events-none"
            >
              <div className="border border-gray-400/40 dark:border-white/30 bg-white/20 dark:bg-black/50 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                <span className="font-mono text-xs sm:text-sm tracking-[0.2em] font-semibold text-gray-900 dark:text-white uppercase">
                  2021 - 2026
                </span>
              </div>
            </motion.div>

            {/* 3. Foto Profil Asli (Di Depan Teks Portfolio) */}
            <motion.div
              style={{ scale: photoScale, opacity: photoOpacity }}
              className="relative z-20 flex items-center justify-center h-full will-change-transform pt-6"
            >
              <img
                src={ProfilePhoto}
                alt="Ardika Rahmad Septian"
                className="max-h-[340px] sm:max-h-[420px] md:max-h-[500px] w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* 4. Tulisan Coretan "Networking, Web Developer & Machine Learning" Melintang di Badan */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-10 sm:bottom-14 inset-x-0 z-30 flex items-center justify-center pointer-events-none px-4"
            >
              <p
                style={scriptFontStyle}
                className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white tracking-wide font-bold italic drop-shadow-[0_4px_16px_rgba(255,255,255,0.95)] dark:drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] text-center rotate-[-1.5deg]"
              >
                Networking, Web Developer &amp; Machine Learning
              </p>
            </motion.div>

            {/* Bottom Ground Shadow */}
            <div className="absolute z-0 bottom-2 w-[200px] h-[12px] sm:w-[260px] sm:h-[16px] bg-gray-900/30 dark:bg-black/70 rounded-full blur-lg" />

          </div>
        </div>

        {/* Bottom Metadata Footer */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-white/10 pt-4">
          <span className="flex items-center gap-2">
            <span>ARDIKA RAHMAD SEPTIAN</span>
            <span className="text-gray-300 dark:text-zinc-700">/</span>
            <span>S1 IT</span>
          </span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;