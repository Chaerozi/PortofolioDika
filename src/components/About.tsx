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

        <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-[8rem_1fr]">
          <span className="hidden font-mono text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600 sm:block">
            Bio
          </span>

          <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
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
        </div>
      </div>
    </section>
  );
};

export default About;