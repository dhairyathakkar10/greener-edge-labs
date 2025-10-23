import customPanelsPDF from "../../assets/pdfs/customPanels.pdf";
import colorChoicePDF from "../../assets/pdfs/colorOptions.pdf";
import infinityMortarsPDF from "../../assets/pdfs/infinityMortars.pdf";

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2E2E2E]">Products & Services</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="product-card group cursor-pointer" data-title="Cast-In-Situ Flooring" data-text="Seamless, durable flooring poured on-site for a flawless finish. Ideal for large commercial and residential spaces.">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src="https://placehold.co/600x400/B85E45/FFFFFF?text=Cast-In-Situ" alt="Cast-In-Situ Flooring" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">{/* <h3 className="text-white text-2xl font-bold">Cast-In-Situ Flooring</h3> */}</div>
            </div>
          </div>
          <div className="product-card group cursor-pointer" data-title="Custom Panels" data-text="Prefabricated terrazzo panels for walls, countertops, and furniture. Precision-crafted to your exact specifications.">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <a href={customPanelsPDF} target="_blank" rel="noopener noreferrer">
                <img src="https://placehold.co/600x400/5CB562/FFFFFF?text=Custom+Panels" alt="Custom Panels" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">{/* <h3 className="text-white text-2xl font-bold">Custom Panels</h3> */}</div>
              </a>
            </div>
          </div>
          <div className="product-card group cursor-pointer" data-title="Color & Aggregate Choices" data-text="A vast library of colors and recycled aggregates like glass, marble, and recycled plastics to create your unique look.">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <a href={colorChoicePDF} target="_blank" rel="noopener noreferrer">
                <img src="https://placehold.co/600x400/2F3C3C/FFFFFF?text=Color+Choices" alt="Color & Aggregate Choices" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">{/* <h3 className="text-white text-2xl font-bold">Color & Aggregate Choices</h3> */}</div>
              </a>
            </div>
          </div>
          <div className="product-card group cursor-pointer" data-title="Infinity Mortars" data-text="A vast library of colors and recycled aggregates like glass, marble, and recycled plastics to create your unique look.">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <a href={infinityMortarsPDF} target="_blank" rel="noopener noreferrer">
                <img src="https://placehold.co/500x300/D5C8B3/FFFFFF?text=Infinity+Mortars" alt="Infinity Mortars" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">{/* <h3 className="text-white text-2xl font-bold">Color & Aggregate Choices</h3> */}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
