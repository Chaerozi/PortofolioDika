import DownloadIcon from "../assets/images/put.png";
import ContactIcon from "../assets/images/contak.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-44 pb-28 bg-white overflow-hidden"
    >
      {/* RIGHT BACKGROUND ACCENT */}
      <div
        className="absolute -top-80 -right-40 w-[360px] h-[360px]
                   bg-gray-200 rounded-full blur-3xl opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-5xl ml-auto lg:mr-16">

          {/* Eyebrow */}
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Personal Portfolio
          </span>

          {/* Headline */}
          <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.05]">
            Ardika Rahmad <br />
            <span className="text-gray-800">Septian</span>
          </h1>

          {/* Divider */}
          <div className="mt-6 w-14 h-[2px] bg-gray-900" />

          {/* Role */}
          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed">
            Information Technology Graduate · Web Developer · Network & IoT
            Enthusiast
          </p>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-loose max-w-xl">
            Fresh graduate in Information Technology with hands-on experience in
            web development, computer networking, and IoT systems. Certified in
            networking and hardware troubleshooting.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            
            {/* VIEW CV */}
            <a
              href="/CV-Ardika-Rahmad-Septian.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3
                         bg-gray-900 text-white px-8 py-4 font-medium
                         transition-all duration-300 hover:bg-black"
            >
              <img
                src={DownloadIcon}
                alt="View CV"
                className="w-5 h-5 -translate-y-[1px]
                           transition-transform group-hover:-translate-y-1"
              />
              <span>View CV</span>
            </a>

            {/* CONTACT */}
            <a
              href="https://wa.me/6282231695138"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4
                         border border-gray-900 text-gray-900
                         px-8 py-4 font-medium
                         transition-all duration-300
                         hover:bg-gray-900 hover:text-white"
            >
              <img
                src={ContactIcon}
                alt="Contact Me"
                className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
              />
              Contact Me
            </a>

          </div>

          {/* Status */}
          <p className="mt-14 text-sm text-gray-400">
            Available for opportunities · Open to collaboration
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
