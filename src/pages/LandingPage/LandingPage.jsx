import styles from "./LandingPage.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/infinityLogoBG.png";
import { useEffect, useRef, useState } from "react";

export const LandingPage = () => {
  const VantaWaves = () => {
    const vantaRef = useRef(null); // Ref for the container element
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
      // Check if VANTA and THREE are available and the effect hasn't been initialized
      if (window.VANTA && window.THREE && !vantaEffect) {
        // Initialize the VANTA.WAVES effect
        const effect = window.VANTA.NET({
          el: vantaRef.current,
          THREE: window.THREE, // Pass the THREE object
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          shininess: 30.0,
          waveHeight: 15.0,
          waveSpeed: 0.85,
          zoom: 0.85,
          backgroundColor: 0xf9f7f2,
          color: 0x5cb562,
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
      <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#f9f7f2] flex items-center justify-center">
        <div className={styles.heroSectionContainer} id="heroSection">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#36454F] leading-tight">
              The Future of Terrazzo
              <span className="block font-normal text-[#214E34]">Zero Cement, Zero Sand, 100% Recycled.</span>
            </h1>
            <p className="mt-4 text-lg text-[#36454F]/80 max-w-2xl mx-auto">Discover Infinity, the revolutionary carbon-negative flooring that combines timeless beauty with unparalleled sustainability.</p>
            <a href="#calculators" className="mt-8 inline-block bg-[#214E34] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#214E34] transition-transform hover:scale-105 shadow-lg">
              Calculate Your Impact
            </a>
          </div>
        </div>
      </div>
    );
  };

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
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.net.min.js", () => {
        setVantaLoaded(true);
      });
    } else if (threeLoaded) {
      setVantaLoaded(true);
    }
  }, [threeLoaded]);
  return (
    <div className={styles.LandingPageContainer}>
      {threeLoaded && vantaLoaded ? <VantaWaves /> : <LoadingScreen />}
      <div className={styles.LandingPageData}>
        <div className={styles.heading}>
          {/* <h1>Infinity</h1>
          <span>By Greener Edge Labs</span> */}
          <img src={logo} />
        </div>
        <div className={styles.tagLine}>
          Seamless Luxury <br />
          Sustainably Crafted
        </div>
        <button>
          <Link to="/home">View Projects</Link>
        </button>
      </div>
    </div>
  );
};
