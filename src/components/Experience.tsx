import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "PT Agra Wijaya Spice",
    date: "Jul 2026 – Jul 2026",
    description:
      "Corporate website for an Indonesian spice company featuring a modern company profile, product showcase, and responsive user experience to strengthen the company's digital presence.",
  },
  {
    role: "Web Developer",
    company: "Aquora Smart Water Monitoring",
    date: "Mar 2026 – Apr 2026",
    description:
      "Built the dashboard that shows water usage and environmental data in real time.",
  },
  {
    role: "Project Manager Intern",
    company: "Bimbel Rumah Sukses",
    date: "Sep 2025 – Jan 2026",
    description:
      "Managed the registration system build and kept the project on schedule.",
  },
  {
    role: "IoT Engineer Intern",
    company: "Dinas Kominfo Jawa Barat",
    date: "Jul 2025 – Aug 2025",
    description:
      "Built an ESP32-CAM door lock with face recognition and tested it for office access control.",
  },
  {
    role: "First Author & Presenter",
    company: "ICIC 2025",
    date: "Mar 2025 – Oct 2025",
    description:
      "Presented a research paper on ensemble voting for MPC reliability in greenhouse IoT systems, later indexed by Scopus.",
  },
  {
    role: "Web Developer",
    company: "Khadijah Islamic Preschool",
    date: "Jan 2025 – Feb 2026",
    description:
      "Rebuilt the school's landing page and added an online registration flow.",
  },
  {
    role: "IT Support Intern",
    company: "PT Mabito Karya Indonesia",
    date: "Jan 2021 – Jun 2021",
    description:
      "Handled day-to-day troubleshooting, OS installs, and hardware repairs.",
  },
];

// Group consecutive entries by the year they started
const getStartYear = (dateRange: string) => {
  const firstPart = dateRange.split("–")[0].trim();
  return firstPart.split(" ").pop() as string;
};

const groups = experiences.reduce<{ year: string; items: typeof experiences }[]>(
  (acc, item) => {
    const year = getStartYear(item.date);
    const last = acc[acc.length - 1];
    if (last && last.year === year) {
      last.items.push(item);
    } else {
      acc.push({ year, items: [item] });
    }
    return acc;
  },
  []
);

const Experience = () => {
  return (
    <section id="experience" className="bg-[#FAFAFA] py-24 md:py-32 dark:bg-[#0A0A0A] transition-colors duration-500">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-24 flex items-end justify-between border-b border-gray-900 dark:border-white pb-6"
        >
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-gray-900 dark:text-white leading-none">
            Experience.
          </h2>
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 pb-2">
            {experiences.length} roles
          </span>
        </motion.div>

        {/* List Layout (Tanpa Garis Vertikal & Titik) */}
        <div className="flex flex-col">
          {groups.map((group) => (
            <div
              key={group.year}
              className="grid grid-cols-1 md:grid-cols-[10rem_1fr] lg:grid-cols-[16rem_1fr] gap-8 md:gap-12 py-12 md:py-16 border-b border-gray-200 dark:border-white/10 last:border-0"
            >
              
              {/* Sticky Year - Super Besar dan Elegan */}
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="md:sticky md:top-32"
                >
                  <h3 className="select-none text-6xl md:text-7xl lg:text-8xl font-serif text-gray-200 dark:text-[#1a1a1a] tracking-tighter leading-none">
                    {group.year}
                  </h3>
                </motion.div>
              </div>

              {/* Items / Roles - Clean Editorial List */}
              <div className="flex flex-col">
                {group.items.map((item, index) => (
                  <motion.div 
                    key={`${item.company}-${item.date}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="group relative flex flex-col md:flex-row md:items-start justify-between gap-y-4 gap-x-8 py-10 border-b border-gray-200 dark:border-white/5 last:border-0 transition-colors hover:border-gray-900 dark:hover:border-white/40"
                  >
                    
                    {/* Role & Description */}
                    <div className="flex-1 max-w-2xl">
                      {/* Efek Hover Text Bergeser + Icon Muncul */}
                      <h4 className="text-xl md:text-2xl font-serif text-gray-900 dark:text-[#e8e4d9] flex items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-2">
                        {item.role}
                        <FiArrowUpRight className="text-gray-400 dark:text-gray-500 opacity-0 -translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-x-0" />
                      </h4>
                      
                      <div className="mt-2 md:mt-3 mb-4">
                        <span className="inline-block text-sm font-medium text-gray-600 dark:text-gray-400">
                          {item.company}
                        </span>
                      </div>

                      <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Date - Aligned Right */}
                    <div className="shrink-0 md:text-right mt-1">
                      <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-gray-400 dark:text-gray-600">
                        {item.date}
                      </span>
                    </div>

                  </motion.div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;