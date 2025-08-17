import styles from "./Features.module.scss";
export const Features = () => {
  return (
    <section id="features" className={`${styles.differentSection} py-20`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>
        <div className={`${styles.innerContainer} horizontal-scroll pb-6 -mx-6 px-6`}>
          <div className="flex space-x-8">
            <div className="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2">Zero Cement</h3>
              <p className="text-sm text-[#36454F]/70">Our proprietary binder eliminates the need for carbon-intensive cement.</p>
            </div>
            <div className="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2">Industrial Waste Binders</h3>
              <p className="text-sm text-[#36454F]/70">We upcycle industrial waste, diverting it from landfills into a durable material.</p>
            </div>
            <div className="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2">No River Sand</h3>
              <p className="text-sm text-[#36454F]/70">Protects vital river ecosystems by avoiding sand dredging.</p>
            </div>
            <div className="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2 text-[#E2725B]">Carbon Negative</h3>
              <p className="text-sm text-[#36454F]/70">Our process sequesters more CO₂ than it produces.</p>
            </div>
            <div className="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2">Custom Mixes</h3>
              <p className="text-sm text-[#36454F]/70">Endless possibilities with custom colors and recycled aggregates.</p>
            </div>
            <div className="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2">Transparent Sourcing</h3>
              <p className="text-sm text-[#36454F]/70">We provide full traceability for all our recycled materials.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
