const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "MySQL",
      "PostgreSQL",
    ],
  },

  {
    title: "IoT & Networking",
    skills: [
      "ESP32",
      "ESP32-CAM",
      "IoT Development",
      "Computer Networking",
      "MikroTik RouterOS",
      "Cisco Packet Tracer",
    ],
  },

  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Visual Studio Code",
    ],
  },

  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400">
            Skills
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Technical Skills & Tools
          </h2>

          <div className="mt-4 w-12 h-[2px] bg-gray-900 dark:bg-white" />
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-gray-200 dark:border-gray-800
                p-6
              "
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-2
                      text-sm
                      rounded-full
                      bg-gray-100 dark:bg-neutral-900
                      text-gray-700 dark:text-gray-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;