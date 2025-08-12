export const Footer = () => {
  return (
    <footer class="bg-[#36454F] text-white py-12">
      <div class="container mx-auto px-6 text-center">
        <div class="mb-6">
          <a href="#hero" class="text-2xl font-extrabold text-white">
            Infinity
            <span class="font-light text-[#E2725B]">by Greener Edge Labs</span>
          </a>
        </div>
        <div class="flex justify-center space-x-6 mb-6">
          <a href="#" class="hover:text-[#E2725B] transition-colors">
            Facebook
          </a>
          <a href="#" class="hover:text-[#E2725B] transition-colors">
            Instagram
          </a>
          <a href="#" class="hover:text-[#E2725B] transition-colors">
            LinkedIn
          </a>
        </div>
        <div class="mb-6">
          <span class="inline-block bg-[#E2725B] text-white text-sm font-bold py-2 px-4 rounded-full">100% Sustainable. Zero Cement. Carbon Negative.</span>
        </div>
        <p class="text-sm text-gray-400">&copy; 2025 Greener Edge Labs. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
