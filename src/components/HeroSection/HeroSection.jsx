import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold text-[#36454F] leading-tight">
          The Future of Terrazzo—
          <span class="block text-[#E2725B]">Zero Cement, Zero Sand, 100% Recycled.</span>
        </h1>
        <p class="mt-4 text-lg text-[#36454F]/80 max-w-2xl mx-auto">Discover Infinity, the revolutionary carbon-negative flooring that combines timeless beauty with unparalleled sustainability.</p>
        <a href="#calculators" class="mt-8 inline-block bg-[#E2725B] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#d1614a] transition-transform hover:scale-105 shadow-lg">
          Calculate Your Impact
        </a>
      </div>
    </div>
  );
};
