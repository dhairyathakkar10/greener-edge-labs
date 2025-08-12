export const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Products & Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="product-card group cursor-pointer" data-title="Cast-In-Situ Flooring" data-text="Seamless, durable flooring poured on-site for a flawless finish. Ideal for large commercial and residential spaces.">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src="https://placehold.co/600x400/E2725B/FFFFFF?text=Cast-In-Situ" alt="Cast-In-Situ Flooring" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Cast-In-Situ Flooring</h3>
              </div>
            </div>
          </div>
          <div className="product-card group cursor-pointer" data-title="Custom Panels" data-text="Prefabricated terrazzo panels for walls, countertops, and furniture. Precision-crafted to your exact specifications.">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src="https://placehold.co/600x400/36454F/FFFFFF?text=Custom+Panels" alt="Custom Panels" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Custom Panels</h3>
              </div>
            </div>
          </div>
          <div className="product-card group cursor-pointer" data-title="Color & Aggregate Choices" data-text="A vast library of colors and recycled aggregates like glass, marble, and recycled plastics to create your unique look.">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src="https://placehold.co/600x400/FDEFEA/36454F?text=Color+Choices" alt="Color & Aggregate Choices" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Color & Aggregate Choices</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
