import EmailIcon from "../assets/images/Email.png";
import LinkedinIcon from "../assets/images/in.png";
import GitIcon from "../assets/images/Git.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Label */}
        <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
          Contact
        </span>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Get In Touch
        </h2>

        {/* Divider */}
        <div className="mt-4 mx-auto w-14 h-[2px] bg-gray-900" />

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-600">
          Feel free to reach out for opportunities or collaborations
        </p>

        {/* Contact Items */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-10 text-gray-700">

          {/* Email */}
          <a
            href="mailto:ardikarahmadseptian78@gmail.com"
            className="flex items-center gap-3 hover:text-gray-900 transition"
          >
            <img
              src={EmailIcon}
              alt="Email"
              className="w-6 h-6 -translate-y-[1px]"
            />
            <span className="text-base">
              ardikarahmadseptian78@gmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ardika-rahmad-47485b263/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gray-900 transition"
          >
            <img
              src={LinkedinIcon}
              alt="LinkedIn"
              className="w-6 h-6 -translate-y-[1px]"
            />
            <span className="text-base">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Chaerozi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gray-900 transition"
          >
            <img
              src={GitIcon}
              alt="GitHub"
              className="w-6 h-6 -translate-y-[1px]"
            />
            <span className="text-base">
              GitHub
            </span>
          </a>

        </div>
      </div>

      {/* Soft separator to Footer */}
      <div className="mt-24 border-t border-gray-200" />
    </section>
  );
};

export default Contact;
