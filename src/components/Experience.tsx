const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "PT Agra Wijaya Spice",
    date: "Jul 2026 – Jul 2026",
    description:
      "Corporate website for an Indonesian spice company featuring a modern company profile, product showcase, and responsive user experience to strengthen the company's digital presence.",
  },
  {
    role: "First Author & Presenter",
    company: "ICIC 2025",
    date: "Mar 2025 – Oct 2025",
    description:
      "Presented a research paper on ensemble voting for MPC reliability in greenhouse IoT systems, later indexed by Scopus.",
  },
  {
    role: "IoT Engineer Intern",
    company: "Dinas Kominfo Jawa Barat",
    date: "Jul 2025 – Aug 2025",
    description:
      "Built an ESP32-CAM door lock with face recognition and tested it for office access control.",
  },
  {
    role: "Web Developer",
    company: "Aquora Smart Water Monitoring",
    date: "Mar 2026 – Apr 2026",
    description:
      "Built the dashboard that shows water usage and environmental data in real time.",
  },
  {
    role: "Web Developer",
    company: "Khadijah Islamic Preschool",
    date: "Jan 2025 – Feb 2026",
    description:
      "Rebuilt the school's landing page and added an online registration flow.",
  },
  {
    role: "Project Manager Intern",
    company: "Bimbel Rumah Sukses",
    date: "Sep 2025 – Jan 2026",
    description:
      "Managed the registration system build and kept the project on schedule.",
  },
  {
    role: "IT Support Intern",
    company: "PT Mabito Karya Indonesia",
    date: "Jan 2021 – Jun 2021",
    description:
      "Handled day-to-day troubleshooting, OS installs, and hardware repairs.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-white py-28 dark:bg-black transition-colors"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-baseline justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
          <h2 className="text-[1.75rem] font-semibold tracking-tight text-neutral-900 dark:text-white">
            Experience
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
            {experiences.length} roles
          </span>
        </div>

        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {experiences.map((item) => (
            <div
              key={`${item.company}-${item.date}`}
              className="grid grid-cols-1 gap-x-10 gap-y-2 py-7 sm:grid-cols-[8rem_1fr]"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                {item.date}
              </span>

              <div className="max-w-2xl">
                <h3 className="font-medium text-neutral-900 dark:text-white">
                  {item.role}
                  <span className="text-neutral-300 dark:text-neutral-700"> · </span>
                  <span className="font-normal text-indigo-600/80 dark:text-indigo-400/80">
                    {item.company}
                  </span>
                </h3>

                <p className="mt-2 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;