// Components
import Container from "@/components/container/container";
// Data
import {usedTechnologies} from "@/data/used-technologies/used-technologies";
// Styles
import styles from "@/pages/used-technologies/Index.module.scss";
import {useEffect, useState} from "react";

export default function UsedTechnologies() {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const [hasAnimated, setHasAnimated] = useState(false);
    const title = "Technologies & Computer Languages We Use";
    const description = "Our company brings a wealth of experience and adaptability across "
        + "a broad spectrum of computer languages and technologies. With a deep understanding "
        + "of both modern and legacy systems, we offer flexible, innovative solutions tailored "
        + "to meet diverse development needs.";

    useEffect(() => {
        if (!hasAnimated) {
            usedTechnologies.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems(prev => [...prev, index]);
                }, index * 300);
            });
            setHasAnimated(true);
        }
    }, [hasAnimated]);

    const technologiesHtml = usedTechnologies.map((technology, index: number) => (<div
        key={index}
        className={styles.technologiesWrapper}
        style={{
            opacity: visibleItems.includes(index) ? 1 : 0,
            transform: `translateY(${visibleItems.includes(index) ? 0 : "40px"})`,
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
        }}>
        <div className={styles.title}>{technology.title}</div>
        <div className={styles.languageList}>
            {technology.list.map((listItem, listIndex: number) => (<span key={listIndex}>
                        <b>{listItem.title}:</b>
                        <div className={styles.itemList}>
                            {listItem.list.map((item: string, itemIndex: number) => (
                                <div key={itemIndex} className={styles.item}>{item}</div>))}
                        </div>
                    </span>))}
        </div>
    </div>));

    return (<div className={styles.wrapper}>
        <Container>
            <div className={styles.heroSection}>
                <div className={styles.heroTitleSection}>
                    {title}
                </div>

                <div className={styles.heroDescription}>
                    {description}
                </div>
            </div>

            <div className={styles.section}>
                {technologiesHtml}
            </div>
        </Container>
    </div>);
}
