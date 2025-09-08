import React, { useState, useEffect, useRef } from "react";

// Main App Component
export default function App() {
  // Vanta.js requires three.js. We'll load them dynamically.
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  useEffect(() => {
    // Function to load a script and return a promise
    const loadScript = (src, onLoaded) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = onLoaded;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };

    // Load three.js first
    if (!window.THREE) {
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js", () => {
        setThreeLoaded(true);
      });
    } else {
      setThreeLoaded(true);
    }

    // Then load vanta.js after three.js is loaded
    if (threeLoaded && !window.VANTA) {
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.waves.min.js", () => {
        setVantaLoaded(true);
      });
    } else if (threeLoaded) {
      setVantaLoaded(true);
    }
  }, [threeLoaded]);

  return (
    <div className="relative w-full h-screen text-white">
      {/* Conditionally render VantaWaves when scripts are loaded */}
      {threeLoaded && vantaLoaded ? <VantaWaves /> : <LoadingScreen />}

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        <div className="text-center bg-black bg-opacity-50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">Vanta.js in React</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">This is an example of integrating the beautiful animated backgrounds from Vanta.js into a modern React application.</p>
        </div>
      </div>
    </div>
  );
}

// VantaWaves Component: Initializes and manages the VANTA.WAVES effect
const VantaWaves = () => {
  const vantaRef = useRef(null); // Ref for the container element
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Check if VANTA and THREE are available and the effect hasn't been initialized
    if (window.VANTA && window.THREE && !vantaEffect) {
      // Initialize the VANTA.WAVES effect
      const effect = window.VANTA.WAVES({
        el: vantaRef.current,
        THREE: window.THREE, // Pass the THREE object
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x313787, // A nice deep blue color
        shininess: 30.0,
        waveHeight: 15.0,
        waveSpeed: 0.85,
        zoom: 0.85,
      });
      setVantaEffect(effect);
    }

    // Cleanup function: This will be called when the component unmounts
    return () => {
      if (vantaEffect) {
        // Destroy the effect to free up resources
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]); // Rerun effect only if vantaEffect state changes

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

// A simple loading screen while scripts are being fetched
const LoadingScreen = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-20 bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <svg className="animate-spin h-8 w-8 text-white mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-lg text-gray-300">Loading Animation...</p>
      </div>
    </div>
  );
};
