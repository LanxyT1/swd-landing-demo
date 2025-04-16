// Next Imports
import React from "react";
// Components
import Container from "@/components/container/container";
import RedirectLink from "@/components/redirect-link/redirect-link";
// Icons
import CustomBuildIcon from "@/assets/svgs/custom-build-icon";
import TeamsIcon from "@/assets/svgs/teams-icon";
import BookIcon from "@/assets/svgs/book-icon";
// Styles
import styles from "@/components/partnenship-section/PartnershipSection.module.scss";

const Partnership = () => {
  const title = "Types of Partnership and Engagement models";
  const secondaryText = "Flexible Partnership Models to Suit Your Needs.";

  return (
      <Container title={title}
                 secondaryText={secondaryText}>
        <div className={styles.section}>
          <div className={styles.cardsWrapper}>
            <div className={styles.partnershipWrapper}>
              <div className={styles.card}>
                <div className={styles.topSection}>
                  <CustomBuildIcon className={styles.icon} />

                  <div className={styles.cardTitle}>
                    Development Based on <br /> Client Requirements
                  </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.cardInfo}>
                  We build tailored software solutions designed specifically to meet your business goals
                  and technical requirements.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.topSection}>
                  <BookIcon className={styles.icon} />

                  <div className={styles.cardTitle}>
                    Long-Term <br /> Software Vendor
                  </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.cardInfo}>
                  We partner with you for ongoing software development and support, ensuring your systems
                  evolve with your needs.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.topSection}>
                  <TeamsIcon className={styles.icon} />

                  <div className={styles.cardTitle}>
                    Subcontracting in Single <br /> & Multi-Team Projects
                  </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.cardInfo}>
                  We collaborate as a trusted subcontractor, integrating smoothly into your team or working
                  alongside multiple teams to deliver high-quality solutions.
                </div>
              </div>

              <div className={styles.card}>
                <p className={styles.additionalInfo}>
                  <b>SWD Factory</b> offers flexible engagement models, working with clients under time-and-materials
                  or fixed-price contracts. This flexibility ensures they can adapt to the client&#39;s preferred approach,
                  whether it involves dynamic, evolving requirements or a well-defined scope of work with a fixed budget.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.redirectText}>
            <RedirectLink link="/transport-logistics"
                          filled={false}
                          title="Learn more about on how we work" />
          </div>
        </div>
      </Container>
  );
};

export default Partnership;
