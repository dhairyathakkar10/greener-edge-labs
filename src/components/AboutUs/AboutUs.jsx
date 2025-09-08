import styles from "./AboutUs.module.scss";
import video from "../../assets/videos/AboutUs.mp4";
// import GLOBE from "vanta/dist/vanta.globe.min.js";
// import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

export const AboutUs = () => {
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);

  // useEffect(() => {
  //   console.log(myRef);
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       GLOBE({
  //         el: myRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0x000000,
  //         vertexColors: 0x000000,
  //         backgroundColor: 0xffffff,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);
  // VantaWaves Component: Initializes and manages the VANTA.WAVES effect
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
    // <section id="about" className={`${styles.aboutSectionContainer} py-20 bg-white`}>
    //   {threeLoaded && vantaLoaded ? <VantaWaves /> : <LoadingScreen />}
    //   <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    //     <div className={`${styles.aboutUsText} text-left`}>
    //       <h2 className="text-3xl font-bold mb-4">About Infinity</h2>
    //       <p className="mb-4 text-lg text-[#36454F]/80">At Greener Edge Labs, our mission is to redefine the building materials industry. We believe that beauty and sustainability are not mutually exclusive.</p>
    //       <p className="text-[#36454F]/80">Infinity is the culmination of years of research, a testament to innovation that challenges the status quo. By replacing cement and sand with recycled industrial by-products, we've created a terrazzo that is not only stronger and more versatile but actively helps heal our planet by sequestering carbon.</p>
    //     </div>
    //     <div className={styles.aboutUsImg}>
    //       <video width="750" height="500" controls loop autoPlay muted>
    //         <source src={video} type="video/mp4" />
    //       </video>
    //     </div>
    //   </div>
    // </section>
    <section id="about" className={`${styles.aboutSectionContainer} bg-white`}>
      <div className="relative w-full h-100 text-white">
        {/* Conditionally render VantaWaves when scripts are loaded */}
        {/* {threeLoaded && vantaLoaded ? <VantaWaves /> : <LoadingScreen />} */}

        {/* Foreground Content */}
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative text-white py-20">
          <div className={`${styles.aboutUsText} text-left`}>
            <h2 className="text-3xl font-bold mb-4">About Infinity</h2>
            <p className="mb-4 text-lg text-[#36454F]/80">At Greener Edge Labs, our mission is to redefine the building materials industry. We believe that beauty and sustainability are not mutually exclusive.</p>
            <p className="text-[#36454F]/80">Infinity is the culmination of years of research, a testament to innovation that challenges the status quo. By replacing cement and sand with recycled industrial by-products, we've created a terrazzo that is not only stronger and more versatile but actively helps heal our planet by sequestering carbon.</p>
          </div>
          <div className={styles.aboutUsImg}>
            <video width="750" height="500" controls loop autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
