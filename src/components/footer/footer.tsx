// Next Imports
import Link from "next/link";
// Components
import SwdFactoryLogo from "@/assets/svgs/swd-factory-logo";
// Styles
import styles from "@/components/footer/Footer.module.scss"

const Footer = () => {
    const addressLink = "https://www.google.com/maps?q=1600+Turaides+st.+10,+Riga,+Latvia";

    return (
      <footer className={styles.footer}>
          <div className={styles.section}>
              <Link href="/" shallow>
                  <SwdFactoryLogo className={`${styles.logo} light`}/>
              </Link>
          </div>

          <div className={styles.lineBreak}></div>

          <div className={styles.section}>
              <div className={styles.rowSection}>
                  <div className={styles.contactInfo}>
                      <span>E-mail address</span>
                      <a href="mailto:info@swdfactory.com">
                          info@swdfactory.com
                      </a>
                  </div>

                  <div className={styles.contactInfo}>
                      <span>Office location</span>
                      <a href={addressLink}
                         target="_blank"
                         rel="noopener noreferrer">
                          Turaides st. 10, Riga, Latvia
                      </a>
                  </div>
              </div>

              <span>© 2025 SWD Factory. All Rights Reserved.</span>
          </div>
      </footer>
    );
};

export default Footer;
