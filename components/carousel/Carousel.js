import { useState } from "react";
import CarouselItem from "./CarouselItem";

import styles from "@/styles/Carousel.module.css";

import {
    BiChevronLeft,
    BiChevronRight,
    BiRadioCircleMarked,
} from "react-icons/bi";

const Carousel = ({ content }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= content.images.length) {
            newIndex = content.images.length - 1;
        }

        setActiveIndex(newIndex);
    };

    return (
        <div className={styles.carousel}>
            <h1>{content.name}</h1>
            <p>{content.description}</p>
            <div
                className={styles.inner}
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
                {content.images.map((imageUrl, idx) => (
                    <CarouselItem key={idx} imageUrl={imageUrl} />
                ))}
            </div>
            <div className={styles.carousel_buttons}>
                <button
                    className={styles.button_arrow}
                    onClick={() => updateIndex(activeIndex - 1)}
                >
                    <BiChevronLeft />
                </button>
                <div className={styles.indicators}>
                    {content.images.map((item, idx) => (
                        <button
                            key={idx}
                            className={styles.indicator_buttons}
                            onClick={() => updateIndex(idx)}
                        >
                            <BiRadioCircleMarked
                                className={`${
                                    activeIndex === idx
                                        ? styles.indicator_symbol_active
                                        : styles.indicator_symbol
                                }`}
                            />
                        </button>
                    ))}
                </div>
                <button
                    className={styles.button_arrow}
                    onClick={() => updateIndex(activeIndex + 1)}
                >
                    <BiChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
