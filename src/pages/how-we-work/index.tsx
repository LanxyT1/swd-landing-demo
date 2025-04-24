//Icons
import Agile from "@/assets/svgs/agile";
import Agreement from "@/assets/svgs/agreement";
import Development from "@/assets/svgs/development";
import Proposal from "@/assets/svgs/proposal";
import Support from "@/assets/svgs/support";
import Waterfall from "@/assets/svgs/waterfall";
// Styles
import styles from "@/pages/how-we-work/Index.module.scss";

export default function HowWeWork() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>
                    Our Process
                </div>

                <div className={styles.cardsWrapper}>
                    <div className={styles.card}>
                        <Proposal className={styles.cardHeader} />

                        <ul>
                            <li>Gather initial information about the project</li>
                            <li>Proposal</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <Agreement className={styles.cardHeader} />

                        <ul>
                            <li>NDA</li>
                            <li>Master service agreement</li>
                            <li>Scope of work</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <Development className={styles.cardHeader} />

                        <ul>
                            <li>Planning</li>
                            <li>Development</li>
                            <li>Testing</li>
                            <li>Delivery</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <Support className={styles.cardHeader} />

                        <ul>
                            <li>Maintenance</li>
                            <li>Enhancements</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>
                    Development Methodology
                </div>

                <div className={styles.sectionDescription}>
                    Depending on project objectives, complexity level and customer specific
                    requirements we select the most suitable method to deliver faster and
                    better results. SWD Factory has hands own experience in working with
                    established proven software development approaches, both in Waterfall
                    and Agile methodologies.
                </div>
            </div>

            <div className={`${styles.section} ${styles.rowSection}`}>
                <Agile className={styles.desktop} />

                <div className={styles.textWrapper}>
                    <div className={styles.sectionTitle}>
                        Agile methodology
                    </div>

                    <div className={styles.sectionDescription}>
                        Agile is appropriate when development needs to be able to respond
                        to changing requirements rapidly and effectively. Agile is more
                        appropriate when the goals of projects are not clearly defined.
                        Agile is regarded as the better option for smaller projects where
                        changes are likely to be made during the development process.

                        <Agile className={styles.mobile} />

                        <ul>
                            <li>Promotes experimental software design</li>
                            <li>Conducive to teamwork oriented environments</li>
                            <li>Flexible design model</li>
                            <li>Promotes adaptive planning and evolutionary development</li>
                            <li>Facilitates interaction and communication – collaboration</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`${styles.section} ${styles.rowSection}`}>
                <div className={styles.textWrapper}>
                    <div className={styles.sectionTitle}>
                        Waterfall methodology
                    </div>

                    <div className={styles.sectionDescription}>
                        Waterfall tends to be best for static projects, where it’s not
                        likely that many changes will be made throughout the development process.

                        <Waterfall className={styles.mobile} />

                        <ul>
                            <li>Time and budget estimates are more reliable</li>
                            <li>Development processes tend to be more secure</li>
                        </ul>
                    </div>
                </div>

                <Waterfall className={styles.desktop} />
            </div>
        </div>
    );
}
