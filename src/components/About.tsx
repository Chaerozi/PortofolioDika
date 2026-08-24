import { motion } from "framer-motion";
import AboutPhoto from "../assets/Foto/Foto.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-28 dark:bg-black transition-colors"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-baseline justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
          <h2 className="text-[1.75rem] font-semibold tracking-tight text-neutral-900 dark:text-white">
            About
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
            Telkom University
          </span>
        </div>

        {/* Grid utama: label kolom kiri (Bio), teks di tengah, foto di kanan.
            items-center supaya foto sejajar rapi dengan blok teks. */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-[8rem_1fr] lg:grid-cols-[8rem_1fr_19rem] lg:items-center">
          <span className="hidden font-mono text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600 sm:block">
            Bio
          </span>

          <div className="order-2 max-w-2xl space-y-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400 lg:order-1">
            <p>
              Information Technology graduate from{" "}
              <span className="font-medium text-indigo-600/80 dark:text-indigo-400/80">
                Telkom University
              </span>
              , with a strong foundation in full-stack development, IoT
              systems, and technology infrastructure.
            </p>

            <p>
              Experienced in building scalable web and IoT-based solutions
              through internships, freelance projects, and project leadership
              roles, using technologies such as React.js, TypeScript,
              Node.js, PostgreSQL, and Prisma ORM.
            </p>

            <p>
              Published a Scopus-indexed international conference paper
              (ICIC 2025) as first author, reflecting a habit of research,
              analytical thinking, and problem-solving in software
              engineering and technology-driven environments.
            </p>
          </div>

          {/* Foto — dengan frame rapi, hover effect halus, dan caption kecil di bawah */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 flex justify-center lg:order-2 lg:col-start-3 lg:row-start-1 lg:justify-end"
          >
            <div className="group relative w-[190px] sm:w-[210px] lg:w-full lg:max-w-[230px]">
              {/* Frame foto: border tipis warna aksen (indigo, senada dgn teks "Telkom University"),
                  padding kecil di dalam supaya foto tidak mepet ke border, shadow lembut + hover naik dikit */}
              <div className="rounded-xl border border-indigo-200 dark:border-indigo-900/50 bg-white dark:bg-neutral-950 p-2 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={AboutPhoto}
                    alt="Ardika Rahmad Septian"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Caption kecil di bawah foto */}
              <div className="mt-3 flex items-center justify-between lg:justify-end lg:gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-600">
                  Ardika · IT Graduate
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