const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* LEFT SOFT BACKGROUND ACCENT */}
      <div
        className="absolute -top-40 -right-40 w-[360px] h-[360px]
                   bg-gray-200 rounded-full blur-3xl opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-5xl ml-auto lg:mr-16">

          {/* Section Label */}
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Skills
          </span>

          {/* Title */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            My Expertise
          </h2>

          {/* Divider */}
          <div className="mt-4 w-14 h-[2px] bg-gray-900" />

          {/* Skills Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">

            {/* Technical */}
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Technical
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600 leading-relaxed">
                <li>React.js, Node.js, Express.js</li>
                <li>REST API Development</li>
                <li>MySQL, MongoDB (Basic)</li>
                <li>Computer Networking (TCP/IP, Routing, Switching)</li>
                <li>MikroTik RouterOS (Basic)</li>
                <li>IoT Development (ESP32, ESP32-CAM, Face Recognition)</li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Tools
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600 leading-relaxed">
                <li>Git & GitHub</li>
                <li>Visual Studio Code</li>
                <li>Postman</li>
                <li>Figma</li>
                <li>Cisco Packet Tracer</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Soft Skills
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600 leading-relaxed">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Leadership</li>
                <li>Problem Solving</li>
                <li>Time Management</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
