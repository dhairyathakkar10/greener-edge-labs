import styles from "./AboutUs.module.scss";
import video from "../../assets/videos/AboutUs.mp4";
import BIRDS from "vanta/dist/vanta.birds.min";
import { useEffect, useRef, useState } from "react";

export const AboutUs = () => {
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       BIRDS({
  //         el: myRef.current,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);
  return (
    <section id="about" className={`${styles.aboutSectionContainer} py-20 bg-white`}>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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
    </section>
  );
};
