import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import ContactIcon from "../assets/images/contak.jpg";
import ProfilePhoto from "../assets/Foto/Setengah1.png";

const heading = { fontFamily: "'Archivo Black', sans-serif" };

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Lacak posisi scroll section ini relatif terhadap viewport:
  // "start end"  -> saat bagian atas section baru masuk ke bawah layar (progress 0)
  // "end start"  -> saat bagian bawah section keluar dari atas layar (progress 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ZOOM IN saat elemen masuk ke tengah viewport, ZOOM OUT lagi saat mulai keluar.
  // 0   -> section baru muncul dari bawah  -> kecil (zoom out)
  // 0.5 -> section persis di tengah layar  -> normal/terbesar (zoom in penuh)
  // 1   -> section mulai keluar ke atas    -> kecil lagi (zoom out)
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.08, 0.85]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.5]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden bg-white dark:bg-black transition-colors pt-10 pb-16 md:pb-24"
    >
      {/* Decorative wavy lines */}
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[340px] opacity-[0.06] dark:opacity-[0.1]"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0,150 C150,50 300,250 500,150 C700,50 850,250 1000,150"
          fill="none"
          stroke="black"
          className="dark:stroke-white"
          strokeWidth="1.5"
        />
        <path
          d="M0,190 C150,90 300,290 500,190 C700,90 850,290 1000,190"
          fill="none"
          stroke="black"
          className="dark:stroke-white"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Top row */}
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

        {/* Intro line */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={heading}
          className="mt-6 md:mt-16 text-center text-base md:text-xl uppercase tracking-tight text-gray-900 dark:text-white"
        >
          Hi there, I&apos;m Dhika
        </motion.p>

        {/*
          FOTO + TEKS MELINGKAR + EFEK ZOOM SAAT SCROLL
          - Cincin teks tetap goyang halus (wiggle) supaya tidak ada teks terbalik.
          - Seluruh blok (cincin + foto) di-scale mengikuti scrollYProgress:
            zoom out saat baru muncul -> zoom in saat di tengah layar -> zoom out saat mulai hilang.
        */}
        <motion.div
          style={{ scale: photoScale, opacity: photoOpacity }}
          className="relative mt-8 md:mt-10 flex justify-center will-change-transform"
        >
          <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            {/* Cincin teks: goyang halus kiri-kanan, tidak berputar penuh.
                Radius diperbesar (170) supaya tidak ketutup foto yang sudah besar. */}
            <motion.svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <defs>
                {/* Path atas: dari kiri melengkung ke atas menuju kanan */}
                <path
                  id="circleTop"
                  d="M 30,200 A 170,170 0 0 1 370,200"
                  fill="none"
                />
                {/* Path bawah: dari kiri ke kanan, melengkung ke BAWAH (bentuk senyum) */}
                <path
                  id="circleBottom"
                  d="M 30,200 A 170,170 0 0 0 370,200"
                  fill="none"
                />
              </defs>

              <text
                style={heading}
                className="fill-gray-900 dark:fill-white"
                fontSize="19"
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
                fontSize="19"
                letterSpacing="2.5"
                textAnchor="middle"
              >
                <textPath href="#circleBottom" startOffset="50%">
                  WEB DEVELOPER &amp; MACHINE LEARNING
                </textPath>
              </text>
            </motion.svg>

            {/* Foto */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              src={ProfilePhoto}
              alt="Ardika Rahmad Septian"
              className="relative z-10 w-[250px] sm:w-[300px] md:w-[340px] h-auto object-contain drop-shadow-xl"
            />

            {/* Bayangan tipis di bawah kaki supaya tidak kosong */}
            <div
              className="absolute z-0 bottom-[13%] w-[150px] h-[14px] sm:w-[180px] sm:h-[16px]
              bg-gray-900/10 dark:bg-white/10 rounded-full blur-md"
            />

            {/* Gradasi hitam tipis di sisi kiri, mengisi ruang kosong secara simple */}
            <div className="absolute z-0 left-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%]
              bg-gradient-to-r from-gray-900/10 dark:from-white/10 to-transparent
              rounded-full blur-2xl pointer-events-none" />

            {/* Gradasi hitam tipis di sisi kanan */}
            <div className="absolute z-0 right-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%]
              bg-gradient-to-l from-gray-900/10 dark:from-white/10 to-transparent
              rounded-full blur-2xl pointer-events-none" />
          </div>
        </motion.div>

        {/* Description + buttons — jarak dirapatkan, center-aligned biar seirama dengan lingkaran di atas */}
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
              className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black
              px-6 py-3 text-sm font-medium transition hover:opacity-90"
            >
              <FiDownload />
              View CV
            </a>

            <a
              href="https://wa.me/6282231695138"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-900 dark:border-gray-300
              text-gray-900 dark:text-gray-100 px-6 py-3 text-sm font-medium
              hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
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