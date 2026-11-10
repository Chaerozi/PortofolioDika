import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import EmailIcon from "../assets/images/Email.png";
import LinkedinIcon from "../assets/images/in.png";
import GitIcon from "../assets/images/Git.png";

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "ardikarahmadseptian78@gmail.com",
      href: "mailto:ardikarahmadseptian78@gmail.com",
      icon: EmailIcon,
    },
    {
      name: "LinkedIn",
      value: "Ardika Rahmad",
      href: "https://www.linkedin.com/in/ardika-rahmad-47485b263/",
      icon: LinkedinIcon,
    },
    {
      name: "GitHub",
      value: "Chaerozi",
      href: "https://github.com/Chaerozi",
      icon: GitIcon,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#FAFAFA] py-24 md:py-32 dark:bg-[#0A0A0A] transition-colors duration-500"
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-20 flex items-end justify-between border-b border-gray-900 dark:border-white pb-6"
        >
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-gray-900 dark:text-white leading-none">
            Contact.
          </h2>
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 pb-2">
            Get in touch
          </span>
        </motion.div>

        {/* Split Layout: Big Statement & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Left Column: Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-6 lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-gray-900 dark:text-[#e8e4d9] leading-[1.1] tracking-tighter mb-6">
                Have a project in mind? <br className="hidden lg:block" />
                Let's make it happen.
              </h3>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
                Feel free to reach out for opportunities, collaborations, or just to say hello.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Premium Directory List */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col pt-4 md:pt-0">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 md:py-8 border-b border-gray-200 dark:border-white/10 transition-colors hover:border-gray-900 dark:hover:border-white/40"
                >
                  <div className="flex items-center gap-6">
                    {/* Ikon PNG dengan efek Grayscale ke Warna (Hover) */}
                    <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 overflow-hidden">
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="w-full h-full object-contain grayscale opacity-60 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-1">
                        {link.name}
                      </span>
                      <span className="text-base md:text-xl font-medium text-gray-900 dark:text-[#e8e4d9] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-2">
                        {link.value}
                      </span>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="shrink-0 text-gray-300 dark:text-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1">
                    <FiArrowUpRight className="text-2xl" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;