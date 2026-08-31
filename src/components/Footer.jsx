export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-accent/10 text-gray-400/60 text-center py-8 px-6 text-xs md:text-sm tracking-wider uppercase transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span>&copy; {currentYear} All Rights Reserved.</span>
      </div>
    </footer>
  );
};
