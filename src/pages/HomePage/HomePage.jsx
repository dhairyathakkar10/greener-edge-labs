import landingPageBGImage from "../../assets/images/landingPageBG.webp";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.HomePageContainer}>
      <div className={styles.HomePageData}>
        <div className={styles.heading}>
          <h1>Eterna</h1>
          <span>By Greener Edge Labs</span>
        </div>
        <div className={styles.tagLine}>
          Seamless Luxury, <br />
          Sustainably Crafted
        </div>
        <button>View Projects</button>
      </div>
    </div>
  );
};
