import styles from "@/styles/CateringItem.module.css";

const CateringItem = ({ item }) => {
    return (
        <>
            <div className={styles.c_mainbx}>
                {/* <div className={styles.container_img}>
                    <img src={faker.image.food()} alt="" />
                </div> */}
                <div className={styles.container_text}>{item}</div>
            </div>
        </>
    );
};

export default CateringItem;
