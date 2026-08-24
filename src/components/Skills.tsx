import { motion } from "framer-motion";
import { FiCode, FiTool, FiUsers, FiWifi } from "react-icons/fi";
import type { IconType } from "react-icons";

type SkillGroup = {
  code: string;
  title: string;
  icon: IconType;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    code: "NET",
    title: "Computer Networking",
    icon: FiWifi,
    skills: [
      "TCP/IP",
      "IPv4/IPv6",
      "IP Addressing",
      "Basic Routing",
      "Ethernet",
      "Wireless Networking",
      "Network Troubleshooting",
      "Basic Network Security",
      "Cisco Networking",
    ],
  },
  {
    code: "DEV",
    title: "Development & Engineering",
    icon: FiCode,
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
      "Machine Learning",
    ],
  },
  {
    code: "TL",
    title: "Tools",
    icon: FiTool,
    skills: [
      "MikroTik RouterOS",
      "Cisco Packet Tracer",
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "VS Code",
    ],
  },
  {
    code: "SOFT",
    title: "Soft Skills",
    icon: FiUsers,
    skills: ["Communication", "Leadership", "Problem Solving", "Team Collaboration"],
  },
];

const totalSkills = skillGroups.reduce((sum, g) => sum + g.skills.length, 0);

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-16 md:py-20 dark:bg-black transition-colors">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-baseline justify-between border-b border-neutral-200 pb-3 dark:border-neutral-800"
        >
          <div>
            <h2 className="text-[1.5rem] md:text-[1.6rem] font-semibold tracking-tight text-neutral-900 dark:text-white">
              Skills
            </h2>
            <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-500">
              A quick index of what I bring to the table.
            </p>
          </div>
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 text-right">
            {totalSkills} skills
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            {skillGroups.length} areas
          </span>
        </motion.div>

        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {skillGroups.map((group) => (
            <motion.div
              key={group.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group grid grid-cols-1 gap-3 py-5
              sm:grid-cols-[8rem_1fr] sm:gap-x-8 sm:gap-y-2 -mx-6 px-6 rounded-xl transition-colors
              hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
            >
              <div className="flex items-center gap-2.5 sm:flex-col sm:items-start sm:gap-2">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
                  bg-indigo-50 text-indigo-600 transition-colors
                  dark:bg-indigo-950/40 dark:text-indigo-400
                  group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50"
                >
                  <group.icon className="text-sm" />
                </span>
                <span
                  className="font-mono text-[11px] tracking-widest text-indigo-600/70
                  dark:text-indigo-400/70 transition-colors
                  group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                >
                  {group.code}
                </span>
              </div>

              <div className="max-w-2xl">
                <div className="mb-2 flex items-baseline gap-2">
                  <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                    {group.title}
                  </h3>
                  <span className="text-[11px] text-neutral-300 dark:text-neutral-700">·</span>
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-600">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-full border border-neutral-200
                      bg-neutral-50 px-2.5 py-1 text-[12.5px] text-neutral-700 transition-colors
                      dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300
                      hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700
                      dark:hover:border-indigo-800 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;