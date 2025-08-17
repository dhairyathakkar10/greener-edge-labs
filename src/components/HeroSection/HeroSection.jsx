import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#36454F] leading-tight">
          The Future of Terrazzo—
          <span className="block font-normal text-[#214E34]">Zero Cement, Zero Sand, 100% Recycled.</span>
        </h1>
        <p className="mt-4 text-lg text-[#36454F]/80 max-w-2xl mx-auto">Discover Infinity, the revolutionary carbon-negative flooring that combines timeless beauty with unparalleled sustainability.</p>
        <a href="#calculators" className="mt-8 inline-block bg-[#214E34] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#214E34] transition-transform hover:scale-105 shadow-lg">
          Calculate Your Impact
        </a>
      </div>
    </div>
  );
};
