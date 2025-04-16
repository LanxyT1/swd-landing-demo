// Next Imports
import React, {useState} from 'react';
// Components
import Container from "@/components/container/container";
import Button from "@/components/button/button";
// Data
import {testimonialList} from "./data/testimonal-list";
// Icons
import ArrowRightIcon from "@/assets/svgs/arrow-right-icon";
// Styles
import styles from "./Testimonials.module.scss";

const TestimonialSection: React.FC = () => {
    const title = "Testimonials";
    const secondaryText = "See what our customers and partners are saying about us.";

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationType, setAnimationType] = useState("");

    const handleNext = () => {
        setAnimationType("");
        setTimeout(() => setAnimationType(styles.fadeInNext), 0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialList.length);
    };

    const handlePrev = () => {
        setAnimationType("");
        setTimeout(() => setAnimationType(styles.fadeInPrev), 0);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialList.length) % testimonialList.length);
    };

    const handleDotClick = (index: number) => {
        setAnimationType("");
        setTimeout(() => setAnimationType(index > currentIndex ? styles.fadeInNext : styles.fadeInPrev), 0);
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonialList[currentIndex];

    return (
        <Container title={title} secondaryText={secondaryText}>
            <div className={styles.section}>
                <div className={styles.dotsWrapper}>
                    {testimonialList.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => handleDotClick(index)}/>
                    ))}
                </div>
                <div className={styles.cardsWrapper}>
                    <div className={styles.button} onClick={handlePrev}>
                        <Button isPrimary={false}>
                            <ArrowRightIcon className={styles.previousButton}/>
                        </Button>
                    </div>

                    <div className={`${styles.card} ${animationType}`}>
                        <div className={styles.companyName}>
                            {currentTestimonial.companyName}
                        </div>

                        <div className={styles.comment}>
                            &#34; {currentTestimonial.comment} &#34;
                        </div>

                        <div className={styles.customerName}>
                            {currentTestimonial.customerName}
                        </div>
                        <div className={styles.position}>{currentTestimonial.position}</div>
                    </div>

                    <div className={styles.button} onClick={handleNext}>
                        <Button isPrimary={false}>
                            <ArrowRightIcon className={styles.nextButton}/>
                        </Button>
                    </div>
                </div>

                <div className={styles.banner}>
                    Interested in partnering with us?

                    <Button text="Contact us"
                               showForwardIcon={true}/>
                </div>
            </div>
        </Container>
    );
};

export default TestimonialSection;
