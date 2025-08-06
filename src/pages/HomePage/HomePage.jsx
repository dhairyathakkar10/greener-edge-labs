import styles from "./HomePage.module.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

export const HomePage = (props) => {
  const drawerWidth = 240;
  const navItems = ["About", "Features", "Products", "Calculators", "Contact"];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, color: "#000", display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.navBarLogo} component="div" sx={{ flexGrow: 1, textAlign: "left", display: { sm: "block" } }}>
            Infinity <span>by Greener Edge Labs</span>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#000" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
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
      {/* <div className={styles.aboutSectionContainer}>
        <div className={styles.leftContainer}>
          <h2>About Infinity</h2>
          <p>At Greener Edge Labs, our mission is to redefine the building materials industry. We believe that beauty and sustainability are not mutually exclusive.</p>
          <p>Infinity is the culmination of years of research, a testament to innovation that challenges the status quo. By replacing cement and sand with recycled industrial by-products, we've created a terrazzo that is not only stronger and more versatile but actively helps heal our planet by sequestering carbon.</p>
        </div>
        <div className={styles.rightContainer}></div>
      </div> */}
      <section id="about" className={`${styles.aboutSectionContainer} py-20 bg-white`}>
        <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className={`${styles.aboutUsText} text-left`}>
            <h2 class="text-3xl font-bold mb-4">About Infinity</h2>
            <p class="mb-4 text-lg text-[#36454F]/80">At Greener Edge Labs, our mission is to redefine the building materials industry. We believe that beauty and sustainability are not mutually exclusive.</p>
            <p class="text-[#36454F]/80">Infinity is the culmination of years of research, a testament to innovation that challenges the status quo. By replacing cement and sand with recycled industrial by-products, we've created a terrazzo that is not only stronger and more versatile but actively helps heal our planet by sequestering carbon.</p>
          </div>
          <div className={styles.aboutUsImg}>
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
              <rect width="100%" height="100%" fill="#FDEFEA" />
              <path fill="#36454F" d="M126.735 178.2v36.15h-6.75V178.2zm12.45 11.62.43 2.03q.77-.78 1.63-1.44.87-.66 1.83-1.12.96-.47 2.06-.73t2.4-.26q2.1 0 3.73.71 1.62.71 2.71 2t1.65 3.08q.56 1.78.56 3.94v16.32h-6.17v-16.32q0-2.36-1.08-3.64-1.07-1.29-3.27-1.29-1.6 0-3 .72-1.4.73-2.65 1.98v18.55h-6.18V188.7h3.78q1.2 0 1.57 1.12m30.83 24.53h-6.18v-21l-2.22-.35q-.73-.15-1.17-.51-.43-.37-.43-1.04v-2.53h3.82v-1.9q0-2.2.66-3.95.67-1.74 1.9-2.97 1.24-1.23 3.02-1.88 1.77-.64 4-.64 1.77 0 3.3.47l-.13 3.1q-.02.35-.2.56-.17.21-.46.33-.29.11-.66.15-.38.03-.8.03-1.1 0-1.97.24-.86.24-1.46.83-.6.58-.91 1.55-.31.96-.31 2.38v1.7h6.67v4.4h-6.47zm10.15-25.65h6.2v25.65h-6.2zm7.05-7.48q0 .8-.33 1.5-.32.7-.86 1.23-.54.52-1.26.84-.73.31-1.55.31-.8 0-1.52-.31-.71-.32-1.23-.84-.53-.53-.84-1.23t-.31-1.5q0-.82.31-1.55.31-.72.84-1.25.52-.52 1.23-.83.72-.32 1.52-.32.82 0 1.55.32.72.31 1.26.83.54.53.86 1.25.33.73.33 1.55m10.8 8.6.42 2.03q.78-.78 1.64-1.44t1.82-1.12q.97-.47 2.07-.73t2.4-.26q2.1 0 3.72.71 1.63.71 2.71 2 1.09 1.29 1.65 3.08.57 1.78.57 3.94v16.32h-6.18v-16.32q0-2.36-1.07-3.64-1.08-1.29-3.28-1.29-1.6 0-3 .72-1.4.73-2.65 1.98v18.55h-6.17V188.7h3.77q1.2 0 1.58 1.12m23.05-1.12h6.2v25.65h-6.2zm7.05-7.48q0 .8-.33 1.5-.32.7-.86 1.23-.54.52-1.26.84-.73.31-1.55.31-.8 0-1.52-.31-.71-.32-1.23-.84-.53-.53-.84-1.23t-.31-1.5q0-.82.31-1.55.31-.72.84-1.25.52-.52 1.23-.83.72-.32 1.52-.32.82 0 1.55.32.72.31 1.26.83.54.53.86 1.25.33.73.33 1.55m14 33.53q-3.35 0-5.14-1.89t-1.79-5.21v-14.33h-2.62q-.5 0-.85-.32-.35-.33-.35-.98v-2.45l4.12-.67 1.3-7q.13-.5.48-.78.35-.27.9-.27h3.2v8.07h6.85v4.4h-6.85v13.9q0 1.2.58 1.88.59.67 1.62.67.57 0 .96-.13.39-.14.67-.29.29-.15.52-.29.22-.14.45-.14.27 0 .45.14.17.14.37.41l1.85 3q-1.35 1.13-3.1 1.7-1.75.58-3.62.58m28.4-26.05h4.95l-13.98 32.7q-.27.65-.71.99t-1.34.34h-4.6l4.8-10.31-10.37-23.72h5.42q.73 0 1.14.35t.61.8l5.45 13.3q.28.67.46 1.35.19.67.37 1.38.22-.71.45-1.39.22-.69.5-1.37l5.15-13.27q.2-.5.66-.83.46-.32 1.04-.32m46.4-10.5v5.52h-10.9v30.63h-6.73v-30.63h-10.9v-5.52zm8.65 20.37h11.65q0-1.2-.34-2.26t-1.01-1.86q-.68-.8-1.72-1.26-1.03-.47-2.41-.47-2.67 0-4.21 1.53t-1.96 4.32m15.75 3.73h-15.88q.15 1.97.7 3.41t1.45 2.38q.9.93 2.14 1.4 1.24.46 2.74.46t2.58-.35q1.09-.35 1.9-.78.82-.42 1.43-.77t1.19-.35q.77 0 1.15.57l1.77 2.25q-1.02 1.2-2.3 2.02-1.27.81-2.66 1.3-1.39.48-2.83.69-1.43.2-2.78.2-2.68 0-4.98-.89t-4-2.63-2.67-4.3q-.98-2.56-.98-5.94 0-2.62.85-4.93.85-2.32 2.44-4.03t3.87-2.71q2.29-1 5.17-1 2.42 0 4.47.77 2.05.78 3.53 2.27 1.47 1.48 2.31 3.65.84 2.16.84 4.93 0 1.4-.3 1.89t-1.15.49m11.52-12.05.38 2.9q1.2-2.3 2.85-3.61 1.65-1.32 3.9-1.32 1.77 0 2.85.78l-.4 4.62q-.13.45-.37.64-.23.19-.63.19-.38 0-1.12-.13-.73-.12-1.43-.12-1.03 0-1.83.3t-1.44.86q-.63.56-1.12 1.36-.49.81-.91 1.83v15.8h-6.18V188.7h3.63q.95 0 1.32.34.38.33.5 1.21m18.65 0 .38 2.9q1.2-2.3 2.85-3.61 1.65-1.32 3.9-1.32 1.77 0 2.85.78l-.4 4.62q-.13.45-.37.64-.23.19-.63.19-.38 0-1.12-.13-.73-.12-1.43-.12-1.03 0-1.83.3t-1.44.86q-.63.56-1.12 1.36-.49.81-.91 1.83v15.8h-6.18V188.7h3.63q.95 0 1.32.34.38.33.5 1.21m26.75 17.47v-4.32q-2.67.12-4.5.46-1.82.34-2.92.86-1.1.53-1.58 1.23-.47.7-.47 1.52 0 1.63.96 2.33t2.51.7q1.9 0 3.29-.69t2.71-2.09m-13.05-13.47-1.1-1.98q4.43-4.05 10.65-4.05 2.25 0 4.03.74 1.77.74 3 2.05 1.22 1.31 1.86 3.14.64 1.82.64 4v16.2h-2.8q-.88 0-1.35-.26-.48-.27-.75-1.07l-.55-1.85q-.98.88-1.9 1.54-.93.66-1.93 1.11t-2.14.69q-1.13.24-2.51.24-1.62 0-3-.44-1.37-.44-2.37-1.31-1-.88-1.55-2.18t-.55-3.02q0-.98.32-1.94.33-.96 1.06-1.84.74-.87 1.92-1.65 1.17-.77 2.88-1.35 1.72-.57 3.99-.93 2.28-.37 5.2-.44v-1.5q0-2.58-1.1-3.81-1.1-1.24-3.17-1.24-1.5 0-2.49.35t-1.74.79l-1.36.78q-.61.35-1.36.35-.65 0-1.1-.33-.45-.34-.73-.79m43.3-5.55v2.55q0 .65-.22 1.27-.23.63-.6 1.03l-12.18 16.05h12.63v4.75h-19.8v-2.58q0-.42.2-1.01.2-.58.6-1.11l12.3-16.23h-12.38v-4.72zm22.98 0v2.55q0 .65-.23 1.27-.22.63-.6 1.03l-12.17 16.05h12.62v4.75h-19.8v-2.58q0-.42.2-1.01.2-.58.6-1.11l12.3-16.23h-12.37v-4.72zm15.9-.4q2.85 0 5.18.92 2.34.93 4 2.63 1.67 1.7 2.57 4.15t.9 5.47q0 3.05-.9 5.5t-2.57 4.18q-1.66 1.72-4 2.65-2.33.93-5.18.93-2.88 0-5.23-.93t-4.01-2.65q-1.66-1.73-2.58-4.18-.91-2.45-.91-5.5 0-3.02.91-5.47.92-2.45 2.58-4.15t4.01-2.63q2.35-.92 5.23-.92m0 21.67q3.2 0 4.73-2.15 1.54-2.15 1.54-6.3t-1.54-6.32q-1.53-2.18-4.73-2.18-3.25 0-4.82 2.19-1.56 2.19-1.56 6.31 0 4.13 1.56 6.29 1.57 2.16 4.82 2.16" />
            </svg>
          </div>
        </div>
      </section>
      <section id="features" class="py-20" className={`${styles.differentSection} py-20`}>
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>
          <div class="horizontal-scroll pb-6 -mx-6 px-6" className={styles.innerContainer}>
            <div class="flex space-x-8">
              <div class="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 class="font-bold text-lg mb-2">Zero Cement</h3>
                <p class="text-sm text-[#36454F]/70">Our proprietary binder eliminates the need for carbon-intensive cement.</p>
              </div>
              <div class="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 class="font-bold text-lg mb-2">Industrial Waste Binders</h3>
                <p class="text-sm text-[#36454F]/70">We upcycle industrial waste, diverting it from landfills into a durable material.</p>
              </div>
              <div class="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 class="font-bold text-lg mb-2">No River Sand</h3>
                <p class="text-sm text-[#36454F]/70">Protects vital river ecosystems by avoiding sand dredging.</p>
              </div>
              <div class="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 class="font-bold text-lg mb-2 text-[#E2725B]">Carbon Negative</h3>
                <p class="text-sm text-[#36454F]/70">Our process sequesters more CO₂ than it produces.</p>
              </div>
              <div class="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 class="font-bold text-lg mb-2">Custom Mixes</h3>
                <p class="text-sm text-[#36454F]/70">Endless possibilities with custom colors and recycled aggregates.</p>
              </div>
              <div class="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 class="font-bold text-lg mb-2">Transparent Sourcing</h3>
                <p class="text-sm text-[#36454F]/70">We provide full traceability for all our recycled materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-12">Products & Services</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="product-card group cursor-pointer" data-title="Cast-In-Situ Flooring" data-text="Seamless, durable flooring poured on-site for a flawless finish. Ideal for large commercial and residential spaces.">
              <div class="relative rounded-xl overflow-hidden shadow-lg">
                <img src="https://placehold.co/600x400/E2725B/FFFFFF?text=Cast-In-Situ" alt="Cast-In-Situ Flooring" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 class="text-white text-2xl font-bold">Cast-In-Situ Flooring</h3>
                </div>
              </div>
            </div>
            <div class="product-card group cursor-pointer" data-title="Custom Panels" data-text="Prefabricated terrazzo panels for walls, countertops, and furniture. Precision-crafted to your exact specifications.">
              <div class="relative rounded-xl overflow-hidden shadow-lg">
                <img src="https://placehold.co/600x400/36454F/FFFFFF?text=Custom+Panels" alt="Custom Panels" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 class="text-white text-2xl font-bold">Custom Panels</h3>
                </div>
              </div>
            </div>
            <div class="product-card group cursor-pointer" data-title="Color & Aggregate Choices" data-text="A vast library of colors and recycled aggregates like glass, marble, and recycled plastics to create your unique look.">
              <div class="relative rounded-xl overflow-hidden shadow-lg">
                <img src="https://placehold.co/600x400/FDEFEA/36454F?text=Color+Choices" alt="Color & Aggregate Choices" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 class="text-white text-2xl font-bold">Color & Aggregate Choices</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section id="testimonials" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div class="relative max-w-3xl mx-auto">
            <div id="testimonial-slider" class="overflow-hidden">
              <div id="testimonial-container" class="flex transition-transform duration-500 ease-in-out">
                <div class="testimonial-item flex-shrink-0 w-full text-center px-8">
                  <p class="text-xl italic text-[#36454F]/80">"Infinity transformed our office with zero environmental impact. The finish is stunning and the story behind it is even better."</p>
                  <p class="mt-4 font-bold">- Sarah L., Architect</p>
                </div>
                <div class="testimonial-item flex-shrink-0 w-full text-center px-8">
                  <p class="text-xl italic text-[#36454F]/80">"Choosing Infinity was a no-brainer. It cost less than traditional terrazzo and helped us achieve our LEED certification goals."</p>
                  <p class="mt-4 font-bold">- Mark Chen, Developer</p>
                </div>
                <div class="testimonial-item flex-shrink-0 w-full text-center px-8">
                  <p class="text-xl italic text-[#36454F]/80">"The custom color and aggregate options allowed us to create a truly unique and branded space for our retail flagship."</p>
                  <p class="mt-4 font-bold">- Emily Rodriguez, Interior Designer</p>
                </div>
              </div>
            </div>
            <button id="prev-testimonial" class="absolute top-1/2 left-0 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-[#E2725B] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button id="next-testimonial" class="absolute top-1/2 right-0 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-[#E2725B] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section id="contact" class="py-20">
        <div class="container mx-auto px-6 max-w-2xl">
          <h2 class="text-3xl font-bold text-center mb-8">Start Your Project Today</h2>
          <form id="contact-form" class="bg-white p-8 rounded-xl shadow-xl space-y-6">
            <div>
              <label for="name" class="block font-bold mb-1">
                Full Name
              </label>
              <input type="text" id="name" name="name" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="John Doe" required />
            </div>
            <div>
              <label for="email" class="block font-bold mb-1">
                Email or Phone
              </label>
              <input type="text" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="hello@example.com" required />
            </div>
            <div>
              <label for="project-size" class="block font-bold mb-1">
                Estimated Project Size (sqft)
              </label>
              <input type="number" id="project-size" name="project-size" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="2500" />
            </div>
            <div>
              <label for="interest" class="block font-bold mb-1">
                Interested Product/Service
              </label>
              <select id="interest" name="interest" class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                <option>Cast-In-Situ Flooring</option>
                <option>Custom Panels</option>
                <option>Color & Aggregate Consultation</option>
                <option>General Enquiry</option>
              </select>
            </div>
            <div>
              <div class="flex justify-between items-center mb-1">
                <label for="message" class="block font-bold">
                  Message / Project Idea
                </label>
                <button type="button" id="generate-vision-btn" class="text-sm text-[#E2725B] hover:underline flex items-center gap-1">
                  ✨ Generate Project Vision
                  <span id="vision-spinner" class="spinner hidden"></span>
                </button>
              </div>
              <textarea id="message" name="message" rows="4" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Describe your project idea here... e.g., 'A modern cafe with a warm, inviting feel, about 1500 sqft'"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="w-full bg-[#E2725B] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#d1614a] transition-transform hover:scale-105 shadow-lg">
                Send Enquiry
              </button>
            </div>
            <div id="form-success-message" class="hidden text-center p-3 bg-green-100 text-green-800 rounded-lg">
              Thank you for your enquiry! We will be in touch soon.
            </div>
          </form>
        </div>
      </section>

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
    </>
  );
};
