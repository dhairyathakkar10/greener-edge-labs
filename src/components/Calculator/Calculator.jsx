import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { PARKING_TILE_SIZES, PATTERN_TILE_SIZES, TERRAZZO_AND_PATTERN_TILE_THICKNESS, TERRAZZO_TILE_SIZES, WALL_AND_PARKING_TILE_THICKNESS, WALL_TILE_SIZES } from "./Calculator.const";
import styles from "./Calculator.module.scss";

export const Calculator = () => {
  const [area, setArea] = useState(1000);
  const [areaForCalculation, setAreaForCalculation] = useState(1000);
  const [type, setType] = useState("Infinity");
  const [finish, setFinish] = useState("standard");
  const [tabValue, setTabValue] = useState(0);
  const [tileType, setTileType] = useState("Terrazzo");
  const [tileSizeArr, setTileSizeArr] = useState(TERRAZZO_TILE_SIZES);
  const [tileSize, setTileSize] = useState(TERRAZZO_TILE_SIZES[0]);
  const [tileThicknessArr, setTileThicknessArr] = useState(TERRAZZO_AND_PATTERN_TILE_THICKNESS);
  const [tileThickness, setTileThickness] = useState(TERRAZZO_AND_PATTERN_TILE_THICKNESS[0]);
  const terrazzoPricing = finish === "standard" ? areaForCalculation * 250 : finish === "premium" ? areaForCalculation * 350 : areaForCalculation * 450;
  const normalPricing = finish === "standard" ? areaForCalculation * 450 : finish === "premium" ? areaForCalculation * 550 : areaForCalculation * 650;

  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  return (
    <section id="calculators" className="py-20">
      <div className="container mx-auto px-6">
        <div>
          {/* <div className="grid lg:grid-cols-2 gap-16 items-start"> */}
          <div className="space-y-16">
            {/* <div className="bg-white p-8 rounded-xl shadow-xl">
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
            </div> */}

            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold text-center mb-6 text-[#2E2E2E]">Estimate Your Project Cost</h2>
              <div className={styles.tabs}>
                <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} aria-label="basic tabs example">
                  <Tab label="Cast-In-Situ" />
                  <Tab label="Tiles" />
                </Tabs>
                <CustomTabPanel value={tabValue} index={0}>
                  <form id="cost-calculator">
                    <div className="mb-4">
                      <label htmlFor="cost-area" className="block font-bold mb-1">
                        Floor Area
                      </label>
                      <div className="flex">
                        <input type="number" id="cost-area" value={areaForCalculation} onChange={(e) => setAreaForCalculation(e.target.value)} className="w-full p-3 border border-gray-300 rounded-l-lg" aria-label="Project Area" placeholder="e.g., 1000" />
                        <div id="carbon-unit" className="p-3 border border-l-0 border-gray-300 rounded-r-lg bg-gray-50">
                          <p>sqft</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="finish-type" className="block font-bold mb-1">
                        Finish Type
                      </label>
                      <select id="finish-type" value={finish} onChange={(e) => setFinish(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                        <option value="standard">Standard Finish</option>
                        <option value="premium">Premium Finish</option>
                        <option value="designer">Designer Finish</option>
                      </select>
                    </div>
                    {/* <div id="cost-results" className="space-y-4"></div> */}
                    <div id="cost-results" class="space-y-4 text-left">
                      <div class="bg-[#FDEFEA] p-4 rounded-lg border border-[#E2725B]/50">
                        <h4 class="font-bold text-[#E2725B]">Infinity Eco-Terrazzo</h4>
                        <p class="text-2xl font-extrabold text-[#36454F]">₹{terrazzoPricing.toLocaleString("en-IN")}</p>
                      </div>
                      <div class="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <h4 class="font-bold text-gray-600">Traditional Terrazzo</h4>
                        <p class="text-2xl font-extrabold text-gray-700">₹{normalPricing.toLocaleString("en-IN")}</p>
                      </div>
                      <div class="text-center mt-4">
                        <p class="font-bold text-[#5cb562]">You save an estimated ₹{(normalPricing - terrazzoPricing).toLocaleString("en-IN")} with Infinity!</p>
                      </div>
                    </div>
                  </form>
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                  <div className="mb-6">
                    <label htmlFor="tile-type" className="block font-bold mb-1">
                      Tile Type
                    </label>
                    <select
                      id="tile-type"
                      value={tileType}
                      onChange={(e) => {
                        setTileType(e.target.value);
                        if (e.target.value === "Terrazzo") {
                          setTileSizeArr(TERRAZZO_TILE_SIZES);
                          setTileSize(TERRAZZO_TILE_SIZES[0]);
                          setTileThicknessArr(TERRAZZO_AND_PATTERN_TILE_THICKNESS);
                          setTileThickness(TERRAZZO_AND_PATTERN_TILE_THICKNESS[0]);
                        } else if (e.target.value === "Pattern") {
                          setTileSizeArr(PATTERN_TILE_SIZES);
                          setTileSize(PATTERN_TILE_SIZES[0]);
                          setTileThicknessArr(TERRAZZO_AND_PATTERN_TILE_THICKNESS);
                          setTileThickness(TERRAZZO_AND_PATTERN_TILE_THICKNESS[0]);
                        } else if (e.target.value === "Wall") {
                          setTileSizeArr(WALL_TILE_SIZES);
                          setTileSize(WALL_TILE_SIZES[0]);
                          setTileThicknessArr(WALL_AND_PARKING_TILE_THICKNESS);
                          setTileThickness(WALL_AND_PARKING_TILE_THICKNESS[0]);
                        } else if (e.target.value === "Parking") {
                          setTileSizeArr(PARKING_TILE_SIZES);
                          setTileSize(PARKING_TILE_SIZES[0]);
                          setTileThicknessArr(WALL_AND_PARKING_TILE_THICKNESS);
                          setTileThickness(WALL_AND_PARKING_TILE_THICKNESS[0]);
                        }
                      }}
                      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                    >
                      <option value="Terrazzo">Terrazzo Tile</option>
                      <option value="Pattern">Pattern Tile</option>
                      <option value="Wall">Wall Tile</option>
                      <option value="Parking">Parking Tile</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="tile-size" className="block font-bold mb-1">
                      Tile Size
                    </label>
                    <select
                      disabled={!tileType}
                      id="tile-size"
                      value={tileSize}
                      onChange={(e) => {
                        setTileSize(e.target.value);
                      }}
                      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                    >
                      {tileSizeArr.map((size) => (
                        <option value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="tile-thickness" className="block font-bold mb-1">
                      Tile Thickness
                    </label>
                    <select
                      disabled={!tileSize}
                      id="tile-thickness"
                      value={tileThickness}
                      onChange={(e) => {
                        setTileThickness(e.target.value);
                        // if (e.target.value === "Terrazzo" || e.target.value === "Pattern") {
                        //   setTileThicknessArr(TERRAZZO_AND_PATTERN_TILE_THICKNESS);
                        //   setTileThickness(TERRAZZO_AND_PATTERN_TILE_THICKNESS[0]);
                        // } else if (e.target.value === "Wall" || e.target.value === "Parking") {
                        //   setTileThicknessArr(WALL_AND_PARKING_TILE_THICKNESS);
                        //   setTileThickness(WALL_AND_PARKING_TILE_THICKNESS[0]);
                        // }
                      }}
                      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                    >
                      {tileThicknessArr.map((size) => (
                        <option value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
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
                  <div id="cost-results" class="space-y-4 text-left">
                    <div class="bg-[#FDEFEA] p-4 rounded-lg border border-[#E2725B]/50">
                      <h4 class="font-bold text-[#E2725B]">Infinity Eco-Terrazzo</h4>
                      <p class="text-2xl font-extrabold text-[#36454F]">₹{terrazzoPricing.toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                </CustomTabPanel>
              </div>
            </div>
          </div>

          {/* <div className="bg-white p-8 rounded-xl shadow-xl sticky top-28">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};
