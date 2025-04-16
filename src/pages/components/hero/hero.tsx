// Next Imports
import React from "react";
// Components
import Button from "@/components/button/button";
import SwdFactoryIcon from "@/assets/svgs/swd-factory-logo";
// Styles
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
      <div className={styles.heroSection}>
          <SwdFactoryIcon className="dark" />

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
              <Button text="Contact us"
                         showForwardIcon={true}/>
          </div>
      </div>
  );
};

export default Hero;
