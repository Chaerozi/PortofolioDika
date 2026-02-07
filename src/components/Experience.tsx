const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* LEFT SOFT BACKGROUND ACCENT */}
      <div className="absolute -top-40 -left-40 w-[360px] h-[360px] 
                      bg-gray-200 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-5xl ml-auto lg:mr-16">

          {/* Section Label */}
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Experience
          </span>

          {/* Title */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Professional Experience
          </h2>

          {/* Divider */}
          <div className="mt-4 w-14 h-[2px] bg-gray-900" />

          {/* Timeline */}
          <div className="mt-16 space-y-16">

            {/* Item 1 */}
            <div className="relative pl-8 border-l border-gray-300">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-gray-900 rounded-full" />

              <h3 className="text-xl font-semibold text-gray-900">
                IoT Engineer Intern
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Diskominfo West Java
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Developed an ESP32-CAM-based smart door lock system with face
                recognition for secure access control. Conducted system testing
                and deployment in an office environment.
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8 border-l border-gray-300">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-gray-900 rounded-full" />

              <h3 className="text-xl font-semibold text-gray-900">
                Project Manager Intern
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Rumah Sukses Foundation
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Led the development of a registration system and landing page
                website. Coordinated team activities, managed timelines, and
                ensured successful project delivery.
              </p>
            </div>

            {/* Item 3 */}
            <div className="relative pl-8 border-l border-gray-300">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-gray-900 rounded-full" />

              <h3 className="text-xl font-semibold text-gray-900">
                IT Support Intern
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Axioo Class Program
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Performed laptop diagnostics, hardware and software
                troubleshooting, and operating system installation.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
