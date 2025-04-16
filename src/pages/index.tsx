// Components
import HeroSection from "@/pages/components/hero-section/HeroSection";
// Styles
import styles from "@/pages/Index.module.scss";

export default function MainPage() {
    return (
        <div className={styles.wrapper}>
            <HeroSection />
        </div>
    );
}
