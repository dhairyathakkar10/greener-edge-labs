export const Calculator = () => {
  return (
    <section id="calculators" class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <div class="space-y-16">
            <div class="bg-white p-8 rounded-xl shadow-xl">
              <h2 class="text-3xl font-bold text-center mb-6">Calculate Your Carbon Savings</h2>
              <form id="carbon-calculator">
                <div class="mb-4">
                  <label for="carbon-area" class="block font-bold mb-1">
                    Floor Area
                  </label>
                  <div class="flex">
                    <input type="number" id="carbon-area" value="1000" class="w-full p-3 border border-gray-300 rounded-l-lg" aria-label="Floor Area" placeholder="e.g., 1000" />
                    <select id="carbon-unit" class="p-3 border border-l-0 border-gray-300 rounded-r-lg bg-gray-50">
                      <option value="sqft">sqft</option>
                      <option value="sqm">sqm</option>
                    </select>
                  </div>
                </div>
                <div class="mb-6">
                  <label for="terrazzo-type" class="block font-bold mb-1">
                    Terrazzo Type
                  </label>
                  <select id="terrazzo-type" class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                    <option value="infinity">Infinity Eco-Terrazzo</option>
                    <option value="traditional">Traditional Terrazzo</option>
                  </select>
                </div>
                <div id="carbon-results" class="text-center bg-[#FDEFEA] p-6 rounded-lg"></div>
              </form>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-xl">
              <h2 class="text-3xl font-bold text-center mb-6">Estimate Your Project Cost</h2>
              <form id="cost-calculator">
                <div class="mb-4">
                  <label for="cost-area" class="block font-bold mb-1">
                    Floor Area
                  </label>
                  <div class="flex">
                    <input type="number" id="cost-area" value="1000" class="w-full p-3 border border-gray-300 rounded-l-lg" aria-label="Project Area" placeholder="e.g., 1000" />
                    <select id="cost-unit" class="p-3 border border-l-0 border-gray-300 rounded-r-lg bg-gray-50">
                      <option value="sqft">sqft</option>
                      <option value="sqm">sqm</option>
                    </select>
                  </div>
                </div>
                <div class="mb-6">
                  <label for="finish-type" class="block font-bold mb-1">
                    Finish Type
                  </label>
                  <select id="finish-type" class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                    <option value="standard">Standard Finish</option>
                    <option value="premium">Premium Finish</option>
                    <option value="designer">Designer Finish</option>
                  </select>
                </div>
                <div id="cost-results" class="space-y-4"></div>
              </form>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-xl sticky top-28">
            <h2 class="text-3xl font-bold text-center mb-8">Traditional vs. Infinity</h2>
            <div class="space-y-6">
              <div class="grid grid-cols-3 items-center text-center">
                <span class="font-bold text-lg">Traditional</span>
                <span class="text-sm font-bold text-gray-500">BINDER</span>
                <span class="font-bold text-lg text-[#E2725B]">Infinity</span>
              </div>
              <div class="grid grid-cols-3 items-center text-center">
                <span>Portland Cement</span>
                <div class="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span class="text-[#E2725B]">Recycled By-products</span>
              </div>
              <hr />
              <div class="grid grid-cols-3 items-center text-center">
                <span class="font-bold text-lg">Traditional</span>
                <span class="text-sm font-bold text-gray-500">AGGREGATE</span>
                <span class="font-bold text-lg text-[#E2725B]">Infinity</span>
              </div>
              <div class="grid grid-cols-3 items-center text-center">
                <span>River Sand</span>
                <div class="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <span class="text-[#E2725B]">Zero Sand Policy</span>
              </div>
              <hr />
              <div class="grid grid-cols-3 items-center text-center">
                <span class="font-bold text-lg">Traditional</span>
                <span class="text-sm font-bold text-gray-500">CARBON FOOTPRINT</span>
                <span class="font-bold text-lg text-[#E2725B]">Infinity</span>
              </div>
              <div class="grid grid-cols-3 items-center text-center">
                <span>~0.8 kg CO₂/sqft</span>
                <div class="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span class="text-[#E2725B]">~ -0.2 kg CO₂/sqft</span>
              </div>
              <hr />
              <div class="grid grid-cols-3 items-center text-center">
                <span class="font-bold text-lg">Traditional</span>
                <span class="text-sm font-bold text-gray-500">COST</span>
                <span class="font-bold text-lg text-[#E2725B]">Infinity</span>
              </div>
              <div class="grid grid-cols-3 items-center text-center">
                <span>High Material Cost</span>
                <div class="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
                  </svg>
                </div>
                <span class="text-[#E2725B]">Competitive Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
