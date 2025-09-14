import { useState } from "react";

export const SustainabilityTable = () => {
  const [type, setType] = useState("Infinity");
  const [area, setArea] = useState(1000);
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-16 items-start p-20">
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2E2E2E]">Traditional vs. Infinity</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-3 items-center text-center">
              <span className="font-bold text-lg">Traditional</span>
              <span className="text-sm font-bold text-gray-500">BINDER</span>
              <span className="font-bold text-lg text-[#E2725B]">Infinity</span>
            </div>
            <div className="grid grid-cols-3 items-center text-center">
              <span>Portland Cement</span>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-[#E2725B]">Recycled By-products</span>
            </div>
            <hr />
            <div className="grid grid-cols-3 items-center text-center">
              <span className="font-bold text-lg">Traditional</span>
              <span className="text-sm font-bold text-gray-500">AGGREGATE</span>
              <span className="font-bold text-lg text-[#E2725B]">Infinity</span>
            </div>
            <div className="grid grid-cols-3 items-center text-center">
              <span>River Sand</span>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <span className="text-[#E2725B]">Zero Sand Policy</span>
            </div>
            <hr />
            <div className="grid grid-cols-3 items-center text-center">
              <span className="font-bold text-lg">Traditional</span>
              <span className="text-sm font-bold text-gray-500">CARBON FOOTPRINT</span>
              <span className="font-bold text-lg text-[#E2725B]">Infinity</span>
            </div>
            <div className="grid grid-cols-3 items-center text-center">
              <span>~0.8 kg CO₂/sqft</span>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-[#E2725B]">~ -0.2 kg CO₂/sqft</span>
            </div>
            <hr />
            <div className="grid grid-cols-3 items-center text-center">
              <span className="font-bold text-lg">Traditional</span>
              <span className="text-sm font-bold text-gray-500">COST</span>
              <span className="font-bold text-lg text-[#E2725B]">Infinity</span>
            </div>
            <div className="grid grid-cols-3 items-center text-center">
              <span>High Material Cost</span>
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
                </svg>
              </div>
              <span className="text-[#E2725B]">Competitive Pricing</span>
            </div>
          </div>
        </div>
        <div className="space-y-16 lg:sticky top-28">
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#2E2E2E]">Calculate Your Carbon Savings</h2>
            <form id="carbon-calculator">
              <div className="mb-4">
                <label htmlFor="carbon-area" className="block font-bold mb-1">
                  Floor Area
                </label>
                <div className="flex">
                  <input type="number" id="carbon-area" value={area} onChange={(e) => setArea(e.target.value)} className="w-full p-3 border border-gray-300 rounded-l-lg" aria-label="Floor Area" placeholder="e.g., 1000" />
                  <div id="carbon-unit" className="p-3 border border-l-0 border-gray-300 rounded-r-lg bg-gray-50">
                    <p>sqft</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="terrazzo-type" className="block font-bold mb-1">
                  Terrazzo Type
                </label>
                <select id="terrazzo-type" value={type} onChange={(e) => setType(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                  <option value="infinity">Infinity Eco-Terrazzo</option>
                  <option value="traditional">Traditional Terrazzo</option>
                </select>
              </div>
              <div id="carbon-results" className="text-center bg-[#FDEFEA] p-6 rounded-lg">
                <p className="text-xl">CO₂ Footprint: {type === "infinity" ? <span className="font-extrabold text-[#5cb562]">{((area / 5) * -1).toFixed(2)} Kg</span> : <span className="font-extrabold text-[#E2725B]">{(area / 1.25).toFixed(2)} Kg</span>}</p>
                {type === "infinity" && <p className="font-bold text-[#E2725B] text-xl">Total Carbon Savings: {area || 0} kg CO₂</p>}
                <span className="text-sm">{type === "infinity" ? "Compared to traditional terrazzo for the same area." : "Switch to Infinity to see your potential savings!"}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
