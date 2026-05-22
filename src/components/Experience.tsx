const experiences = [
  {
    role: "First Author & Presenter",
    company: "ICIC 2025 Scientific Publication",
    date: "Mar 2026 - Oct 2026",
    description:
      "Published and presented research on ensemble voting methods for improving MPC reliability in greenhouse smart farming IoT systems.",
  },
  {
    role: "IoT Engineer Intern",
    company:
      "Department of Communication and Informatics of West Java Province",
    date: "Jul 2025 - Aug 2025",
    description:
      "Built an ESP32-CAM smart door lock system with face recognition for automated office access and security testing.",
  },
  {
    role: "Web Developer",
    company: "Aquora Smart Water Monitoring System",
    date: "Mar 2026 - Apr 2026",
    description:
      "Developed a real-time monitoring dashboard for water usage and environmental data visualization.",
  },
  {
    role: "Web Developer",
    company: "Khadijah Islamic Preschool",
    date: "Jan 2025 - Feb 2026",
    description:
      "Developed a responsive landing page and online registration system for better accessibility.",
  },
  {
    role: "Project Manager Intern",
    company: "Bimbel Rumah Sukses",
    date: "Sep 2024 - Jan 2025",
    description:
      "Managed the development of a registration system and coordinated project timelines.",
  },
  {
    role: "IT Support Intern",
    company: "PT Mabito Karya Indonesia",
    date: "Jan 2021 - Jun 2021",
    description:
      "Handled laptop troubleshooting, OS installation, hardware repairs, and technical support.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400">
            Experience
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Professional Experience
          </h2>

          <div className="mt-4 w-12 h-[2px] bg-gray-900 dark:bg-white" />
        </div>

        {/* Experience List */}
        <div className="mt-16 space-y-10">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="pb-10 border-b border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {item.company}
                  </p>
                </div>

                <span className="text-sm text-gray-400 whitespace-nowrap">
                  {item.date}
                </span>
              </div>

              <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;