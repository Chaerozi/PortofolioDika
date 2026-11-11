import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
      "Routing",
      "Switching",
      "SD-WAN",
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
      "Cloudinary",
      "Payment Gateway",
      "Machine Learning",
    ],
  },
  {
    code: "TL",
    title: "Tools & Platforms",
    icon: FiTool,
    skills: [
      "MikroTik RouterOS",
      "Cisco Packet Tracer",
      "Teltonika",
      "Fortinet",
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
    skills: [
      "Communication", 
      "Leadership", 
      "Problem Solving", 
      "Team Collaboration"
    ],
  },
];

const totalSkills = skillGroups.reduce((sum, g) => sum + g.skills.length, 0);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Efek parallax halus saat container skills di-scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-[#FAFAFA] py-28 md:py-36 dark:bg-[#0A0A0A] transition-colors duration-700 overflow-hidden select-none"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        
        {/* Editorial Header dengan Animasi Reveal */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-900 dark:border-white/30 pb-6"
        >
          <div className="max-w-2xl overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-serif tracking-tight text-gray-900 dark:text-white leading-none mb-4"
            >
              Core Skills.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base text-gray-500 dark:text-gray-400"
            >
              A comprehensive index of my technical expertise and capabilities.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-left md:text-right"
          >
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {totalSkills} Skills
              <span className="mx-2 opacity-50">/</span>
              {skillGroups.length} Domains
            </span>
          </motion.div>
        </motion.div>

        {/* Premium Grid Cards dengan Staggered Entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[2rem] border border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#111111] p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-none hover:-translate-y-1.5"
            >
              {/* Giant Watermark Icon */}
              <div className="absolute -bottom-6 -right-6 text-gray-50 dark:text-white/[0.02] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                <group.icon size={180} strokeWidth={1} />
              </div>

              {/* Card Header */}
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 dark:bg-[#222] text-gray-900 dark:text-white transition-colors duration-300 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                  <group.icon className="text-xl" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-1 uppercase">
                    {group.code}
                  </span>
                  <h3 className="text-xl font-serif text-gray-900 dark:text-[#e8e4d9]">
                    {group.title}
                  </h3>
                </div>
              </div>

              {/* Pill Tags Container */}
              <div className="relative z-10 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-gray-200/60 dark:border-white/10 bg-gray-50/50 dark:bg-black/20 px-3.5 py-1.5 text-[13px] font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;