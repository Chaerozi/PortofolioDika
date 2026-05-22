const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-black overflow-hidden transition-colors"
    >
      {/* LEFT BACKGROUND ACCENT */}
      <div
        className="
          absolute -top-40 -left-40 w-[360px] h-[360px]
          bg-gray-200 dark:bg-gray-800 rounded-full blur-3xl opacity-40
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-5xl ml-auto lg:mr-16">

          {/* Section Label */}
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            About
          </span>

          {/* Title */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>

          {/* Divider */}
          <div className="mt-4 w-14 h-[2px] bg-gray-900 dark:bg-white" />

          {/* Content */}
          <div className="mt-10 space-y-6">

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Information Technology graduate from{" "}
              <span className="font-medium text-gray-800 dark:text-gray-100">
                Telkom University
              </span>{" "}
              with a strong foundation in full-stack development,
              IoT systems, and technology infrastructure.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Experienced in building scalable web and IoT-based solutions
              through internships, freelance projects, and project leadership roles
              using technologies such as React.js, TypeScript, Node.js,
              PostgreSQL, and Prisma ORM.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Published a Scopus-indexed international conference paper
              (ICIC 2025) as First Author, demonstrating research excellence,
              analytical thinking, and strong problem-solving skills in
              software engineering and technology-driven environments.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;