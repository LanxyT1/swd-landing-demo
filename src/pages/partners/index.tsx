// Components
import Container from "@/components/container/container";
// Data
import {customerList, partnerList} from "@/data/partners/partner-list";
// Styles
import styles from "@/pages/partners/Index.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
    const title = "Partners & Clients";
    const description = "We consider each our client as a potential partner and we believe that "
        + "there is always a possibility  to create a long-term win-win relationships between "
        + "companies.";

    const partnerListHtml = partnerList.map((partner, index) => (
        <div key={index}
             className={styles.card}>
            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <Image className={styles.logo}
                           src={partner.logo}
                           alt={partner.name}
                           width={200}
                           height={0} />
                </div>

                <div className={styles.description}>
                    {partner.description}

                    {partner.link && (
                        <Link href={partner.link} target="_blank">Visit website -&gt;</Link>
                    )}
                </div>
            </div>
        </div>
    ));

    const clientListHtml = customerList.map((partner, index) => (
        <div key={index}
             className={styles.card}>
            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <Image className={`${styles.logo} ${partner.smallIcon && styles.smallIcon}`}
                           src={partner.logo}
                           alt={partner.name}
                           width={200}
                           height={0} />
                </div>

                <div className={styles.description}>
                    {partner.description}

                    {partner.link && (
                        <Link href={partner.link} target="_blank">Visit website -&gt;</Link>
                    )}
                </div>
            </div>
        </div>
    ));

    return (
        <div className={styles.wrapper}>
            <div className={styles.section}>
                <Container title={title} secondaryText={description}>
                    <div className={styles.rowSection}>
                        <div className={styles.title}>
                            Partners
                        </div>

                        <div className={styles.description}>
                            We believe in building long-term, trust-based collaborations that
                            grow over time. Whether it’s tackling complex challenges or creating
                            something new, we work side by side with our partners to make it happen.
                        </div>

                        <div className={styles.cardsWrapper}>
                            {partnerListHtml}
                        </div>
                    </div>

                    <div className={styles.rowSection}>
                        <div className={styles.title}>
                            Clients
                        </div>

                        <div className={styles.description}>
                            Every client is a story we’re proud to be part of. From startups to
                            enterprises, we help bring ideas to life with care, clarity, and
                            commitment. We’re not just here to deliver—we’re here to grow together.
                        </div>

                        <div className={styles.cardsWrapper}>
                            {clientListHtml}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
