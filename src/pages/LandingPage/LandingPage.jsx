import styles from "./LandingPage.module.scss";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className={styles.LandingPageContainer}>
      <div className={styles.LandingPageData}>
        <div className={styles.heading}>
          <h1>Eterna</h1>
          <span>By Greener Edge Labs</span>
        </div>
        <div className={styles.tagLine}>
          Seamless Luxury, <br />
          Sustainably Crafted
        </div>
        <button>
          <Link to="/home">View Projects</Link>
        </button>
      </div>
    </div>
  );
};
