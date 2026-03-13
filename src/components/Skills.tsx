const Skills = () => {
  const technical = [
    "React.js",
    "Node.js",
    "Express.js",
    "REST API Development",
    "MySQL",
    "MongoDB",
    "Computer Networking",
    "MikroTik RouterOS",
    "IoT Development (ESP32, ESP32-CAM)"
  ];

  const tools = [
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Postman",
    "Figma",
    "Cisco Packet Tracer"
  ];

  const soft = [
    "Communication",
    "Teamwork",
    "Leadership",
    "Problem Solving",
    "Time Management"
  ];

  const renderSkills = (skills: string[]) =>
    skills.map((skill, index) => (
      <span
        key={index}
        className="
        px-4 py-2
        text-sm
        border border-gray-300 dark:border-gray-700
        text-gray-700 dark:text-gray-300
        rounded-md
        hover:border-gray-900 dark:hover:border-white
        transition
        "
      >
        {skill}
      </span>
    ));

  return (
    <section
      id="skills"
      className="relative py-24 bg-white dark:bg-black overflow-hidden"
    >
      {/* Accent */}
      <div
        className="absolute -top-40 -right-40 w-[360px] h-[360px]
        bg-gray-200 dark:bg-gray-800 rounded-full blur-3xl opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-5xl ml-auto lg:mr-16">

          {/* Header */}
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Skills
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Expertise
          </h2>

          <div className="mt-4 w-14 h-[2px] bg-gray-900 dark:bg-white" />

          {/* Grid */}
          <div className="mt-14 grid md:grid-cols-3 gap-14">

            {/* Technical */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Technical
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {renderSkills(technical)}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Tools
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {renderSkills(tools)}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Soft Skills
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {renderSkills(soft)}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;