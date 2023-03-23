import styles from "@/styles/MenuItem.module.css";

import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";

import { menuData } from "@/data/menuData";
import { BiInfoCircle } from "react-icons/bi";

const MenuItem = ({ keyword, item }) => {
    return (
        <>
            <div className={styles.c_mainbx}>
                {/* <div className={styles.container_img}>
                    <img src={faker.image.food()} alt="" />
                </div> */}
                <div className={styles.container_text}>
                    <p>{item.item}</p>
                    <p className={styles.subtext}>
                        {item.description.length > 50
                            ? `${item.description.slice(0, 50)}...`
                            : item.description}
                    </p>
                    <Link
                        href={`/menu/${keyword}/${item.id}`}
                        
                    >
                        <BiInfoCircle /> {"   "}(see details)
                    </Link>
                </div>
                <div className={styles.menu_price}>
                    <span>{item.price}</span>
                </div>
            </div>
        </>
    );
};

export default MenuItem;
