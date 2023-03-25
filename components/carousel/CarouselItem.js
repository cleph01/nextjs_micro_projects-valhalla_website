import styles from "@/styles/CarouselItem.module.css";

const CarouselItem = ({ imageUrl }) => {
    return (
        <div className={styles.carousel_item}>
            <img src={imageUrl} alt="" className={styles.carousel_img} />
            {/* <div className={styles.arousel_item_text}>bla</div> */}
        </div>
    );
};

export default CarouselItem;
