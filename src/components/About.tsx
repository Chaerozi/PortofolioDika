const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* LEFT SOFT BACKGROUND ACCENT */}
      <div className="absolute -top-40 -left-40 w-[360px] h-[360px] 
                      bg-gray-200 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-5xl ml-auto lg:mr-16">

          {/* Section Label */}
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            About
          </span>

          {/* Title */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>

          {/* Divider */}
          <div className="mt-4 w-14 h-[2px] bg-gray-900" />

          {/* Content */}
          <div className="mt-10 space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a fresh graduate in Information Technology from{" "}
              <span className="font-medium text-gray-800">
                Telkom University
              </span>{" "}
              with a strong interest in software development, IT infrastructure,
              and IoT systems.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I have experience in full stack web development using React and
              Node.js, computer networking, and IoT-based solutions. My background
              includes internships, project management roles, and research
              publications in smart farming IoT.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I am highly motivated, adaptive, and eager to contribute to
              technology-driven environments while continuously improving my
              technical and problem-solving skills.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
