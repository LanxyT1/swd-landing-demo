// Next Imports
import Image from "next/image";
// Components
import Hero from "@/pages/components/hero/hero";
import OurServices from "@/pages/components/our-services/our-service";
import MainIndustries from "@/pages/components/main-industries/main-industries";
import Partnership from "@/pages/components/partnenship/partnership";
import Testimonial from "@/pages/components/testimonials/testimonials";
// Styles
import styles from "@/pages/Index.module.scss";
// Config
import config from "../../next.config";

export default function MainPage() {
    const flowPathUrl = `${config.basePath}/flow.svg`
    return (
        <div className={styles.wrapper}>
            <Image className={styles.flow}
                   src={flowPathUrl}
                   alt="Flow"
                   width={0}
                   height={0} />

            <div className={styles.section}><Hero/></div>
            <div className={styles.section}><OurServices/></div>
            <div className={styles.section}><MainIndustries/></div>
            <div className={styles.section}><Partnership/></div>
            <div className={styles.section}><Testimonial/></div>
        </div>
    );
}
