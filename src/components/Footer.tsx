import { FiArrowUp } from "react-icons/fi";
import ContactIcon from "../assets/images/contak.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Utility Bar - Strictly Editorial & Clean */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-gray-900 dark:border-white">
          
          {/* Left: Logo & Copyright */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
            <div 
              onClick={scrollToTop}
              className="w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-sm grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img src={ContactIcon} alt="Ardika Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-gray-900 dark:text-white">
              © {currentYear} Ardika R.S.
            </span>
          </div>

          {/* Center: Live Status (Hidden on Mobile for cleaner look) */}
          <div className="hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 dark:bg-gray-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gray-500 dark:bg-gray-400" />
            </span>
            <span>Bandung, IDN</span>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
          >
            Back to top
            <FiArrowUp className="text-sm transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;