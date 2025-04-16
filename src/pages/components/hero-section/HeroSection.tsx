// Next Imports
import React from "react";
// Components
// import SwdButton from "@/components/button/b";
// import {SwdFactoryIcon} from "@/assets/svgs";
// Styles
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
      <div className={styles.heroSection}>
          {/*<SwdFactoryIcon className="dark" />*/}

          <div className={styles.heroTitleSection}>
              <div className={styles.titleRow}>
                  Developers of
              </div>
              <div className={styles.titleRow}>
                  enterprise-level, data-intensive & scientific
              </div>
              <div className={styles.titleRow}>
                  software solutions
              </div>
          </div>

          <div className={styles.heroActionSection}>
              {/*<SwdButton text="Contact us"*/}
              {/*           showForwardIcon={true}/>*/}
          </div>
      </div>
  );
};

export default HeroSection;
