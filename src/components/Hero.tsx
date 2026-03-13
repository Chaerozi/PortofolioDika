import { FiDownload } from "react-icons/fi";
import ContactIcon from "../assets/images/contak.jpg";
import ProfilePhoto from "../assets/Foto/Foto.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 md:pt-44 pb-20 md:pb-28
      bg-white dark:bg-black overflow-hidden transition-colors"
    >
      {/* Background Accent */}
      <div
        className="absolute -top-60 -right-40 w-[300px] h-[300px] md:w-[360px] md:h-[360px]
        bg-gray-200 dark:bg-gray-800 rounded-full blur-3xl opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* PHOTO */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">

            <div className="relative flex items-center justify-center">

              <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px]
              bg-gray-100 dark:bg-gray-900 rounded-full blur-2xl opacity-60"></div>

              <img
                src={ProfilePhoto}
                alt="Ardika Rahmad Septian"
                className="relative w-[200px] md:w-[280px] lg:w-[360px]
                rounded-full shadow-xl border-4 border-white dark:border-gray-800
                object-contain bg-white dark:bg-gray-900"
              />

            </div>

          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Personal Portfolio
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Ardika Rahmad <br />
              <span className="text-gray-800 dark:text-gray-300">Septian</span>
            </h1>

            <div className="mt-6 w-14 h-[2px] bg-gray-900 dark:bg-white mx-auto lg:mx-0" />

            <p className="mt-8 text-base md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Information Technology Graduate · Web Developer · Network & IoT Enthusiast
            </p>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-loose max-w-xl mx-auto lg:mx-0">
              Fresh graduate in Information Technology with hands-on experience in
              web development, computer networking, and IoT systems. Certified in
              networking and hardware troubleshooting.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">

                      <a
          href="/Ardika_Rahmad_Septian_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3
          bg-gray-900 dark:bg-white
          text-white dark:text-black
          px-6 md:px-8 py-3 md:py-4
          font-medium transition hover:opacity-90"
        >
          <FiDownload className="text-xl" />
          View CV
        </a>

              <a
                href="https://wa.me/6282231695138"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3
                border border-gray-900 dark:border-gray-300
                text-gray-900 dark:text-gray-200
                px-6 md:px-8 py-3 md:py-4
                font-medium
                hover:bg-gray-900 hover:text-white
                dark:hover:bg-white dark:hover:text-black
                transition"
              >
                <img src={ContactIcon} alt="Contact" className="w-5 h-5" />
                Contact Me
              </a>

            </div>

            <p className="mt-10 text-sm text-gray-400">
              Available for opportunities · Open to collaboration
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;