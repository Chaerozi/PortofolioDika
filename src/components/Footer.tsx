const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Ardika Rahmad Septian. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;