export const Footer = () => {
  return (
    <footer className="bg-[#36454F] text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <a href="#heroSection" className="text-2xl text-white">
            Infinity
            <span className="font-light text-[#5cb562]"> by Greener Edge Labs</span>
          </a>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-[#5cb562] transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-[#5cb562] transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-[#5cb562] transition-colors">
            LinkedIn
          </a>
        </div>
        <div className="mb-6">
          <span className="inline-block bg-[#214E34] text-white text-sm font-bold py-2 px-4 rounded-full">100% Sustainable. Zero Cement. Carbon Negative.</span>
        </div>
        <p className="text-sm text-gray-400">&copy; 2025 Greener Edge Labs. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
