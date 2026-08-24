import { motion } from "framer-motion";

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

// Group consecutive entries by the year they started (list is already newest → oldest)
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
    <section id="experience" className="bg-white py-16 md:py-20 dark:bg-black transition-colors">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-baseline justify-between border-b border-neutral-200 pb-3 dark:border-neutral-800">
          <h2 className="text-[1.6rem] font-semibold tracking-tight text-neutral-900 dark:text-white">
            Experience
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
            {experiences.length} roles
          </span>
        </div>

        <div className="space-y-12 md:space-y-16">
          {groups.map((group) => (
            <motion.div
              key={group.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-[7rem_1fr] sm:gap-10"
            >
              <div className="select-none text-4xl font-semibold text-neutral-200 dark:text-neutral-800 md:text-5xl">
                {group.year}
              </div>

              <div className="space-y-8">
                {group.items.map((item) => (
                  <div key={`${item.company}-${item.date}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-medium text-neutral-900 dark:text-white">
                        {item.role}
                        <span className="text-neutral-300 dark:text-neutral-700"> · </span>
                        <span className="font-normal text-indigo-600/80 dark:text-indigo-400/80">
                          {item.company}
                        </span>
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                        {item.date}
                      </span>
                    </div>

                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;