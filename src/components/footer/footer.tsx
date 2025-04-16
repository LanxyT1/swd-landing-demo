// Components
// import {SwdFactoryIcon} from "@/assets/icons";
// Styles
import styles from "@/styles/Footer.module.scss"

const Footer = () => {
    const addressLink = "https://www.google.com/maps?q=1600+Turaides+st.+10,+Riga,+Latvia";

    return (
      <footer className={styles.footer}>
          <div className={styles.section}>
              {/*<SwdFactoryIcon className="light" />*/}
          </div>

          <div className={styles.lineBreak}></div>

          <div className={styles.section}>
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
      </footer>
    );
};

export default Footer;
