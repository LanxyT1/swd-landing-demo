// Components
import Container from "@/components/container/container";
// Data
import {partnerList} from "@/data/partners/partner-list";
// Styles
import styles from "@/pages/parnters/Index.module.scss";
import Image from "next/image";

export default function Partners() {
    const title = "Partners";
    const description = "We consider each our client as a potential partner and we believe that "
        + "there is always a possibility  to create a long-term win-win relationships between "
        + "companies.";

    const partnerListHtml = partnerList.map((partner, index) => (
        <div key={index}
             className={styles.card}
             onClick={() => window.open(partner.link, "_blank")}>
            <Image className={styles.logo}
                   src={partner.logo}
                   alt={partner.name}
                   width={200}
                   height={0} />
        </div>
    ))

    return (
        <div className={styles.wrapper}>
            <div className={styles.section}>
                <Container title={title} secondaryText={description}>
                    <div className={styles.cardsWrapper}>
                        {partnerListHtml}
                    </div>
                </Container>
            </div>
        </div>
    );
}
