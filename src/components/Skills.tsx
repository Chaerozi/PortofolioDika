const skillGroups = [
  {
    code: "DEV",
    title: "Development & Engineering",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST API",
      "MySQL",
      "PostgreSQL",
      "ESP32",
      "ESP32-CAM",
      "Face Recognition",
      "Python",
      "Machine Learning",
      "Computer Networking",
      "MikroTik RouterOS",
      "Cisco Packet Tracer",
    ],
  },
  {
    code: "TL",
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Figma", "VS Code"],
  },
  {
    code: "SOFT",
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Problem Solving", "Team Collaboration"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-28 dark:bg-black transition-colors">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-baseline justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
          <h2 className="text-[1.75rem] font-semibold tracking-tight text-neutral-900 dark:text-white">
            Skills
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
            {skillGroups.length} areas
          </span>
        </div>

        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {skillGroups.map((group) => (
            <div
              key={group.code}
              className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-10 gap-y-2 py-6 sm:grid-cols-[8rem_1fr]"
            >
              <span className="font-mono text-[11px] tracking-widest text-indigo-600/70 dark:text-indigo-400/70">
                {group.code}
              </span>

              <div className="max-w-2xl">
                <h3 className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {group.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200">
                  {group.skills.map((skill, i) => (
                    <span key={skill}>
                      <span className="cursor-default transition-colors hover:text-neutral-950 dark:hover:text-white">
                        {skill}
                      </span>
                      {i < group.skills.length - 1 && (
                        <span className="mx-2 text-neutral-300 dark:text-neutral-700">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;