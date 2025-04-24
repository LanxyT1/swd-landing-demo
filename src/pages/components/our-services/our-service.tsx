// Next Imports
import React, {useState} from "react";
// Components
import Container from "@/components/container/container";
import Button from "@/components/button/button";
import RedirectLink from "@/components/redirect-link/redirect-link";
import {
    OPTION_DEFAULT,
    optionList,
    ourServiceList
} from "@/data/our-service-list/our-service-list";
// Styles
import styles from "./OurServices.module.scss";

const OurService = () => {
    const title = "Our Services";
    const secondaryText = "We cover the full software development life cycle from business " +
        "analysis to quality assurance and deployment and post-launch maintenance and support.";

    const [activeOption, setActiveOption] = useState<string>(OPTION_DEFAULT);

    const onButtonClick = (key: string) => setActiveOption(key);

    const renderOptionButton = (option: string) => {
        const isActiveOption = activeOption === option;

        return (
            <div
                key={option}
                onClick={() => onButtonClick(option)}
                className={styles.optionWrapper}>
                <Button
                    text={ourServiceList[option].title}
                    isPrimary={isActiveOption}
                    isFocused={isActiveOption}
                    smallButton={true}
                />
            </div>
        );
    };

    return (
        <Container title={title} secondaryText={secondaryText}>
            <div className={styles.section}>
                <div className={styles.ourServicesWrapper}>
                    <div className={styles.optionList}>
                        {optionList.map(renderOptionButton)}
                    </div>

                    <div className={styles.optionInfoWrapper}>
                        <div className={styles.optionDescriptionSection}>
                            <div className={styles.optionDescriptionWrapper}>
                                <div className={styles.title}>
                                    {ourServiceList[activeOption].title}
                                </div>

                                <div className={styles.divider}></div>

                                <div className={styles.secondaryText}>
                                    {ourServiceList[activeOption].description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.redirectText}>
                    <RedirectLink link="/used-technologies"
                                  filled={false}
                                  title="Learn more about technologies we use" />
                </div>
            </div>
        </Container>
    );
};

export default OurService;
