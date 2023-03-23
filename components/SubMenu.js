import styles from "@/styles/SubMenu.module.css";
import Link from "next/link";

const SubMenu = () => {
    return (
        <>
            <li className={styles.subMenu}>
                <Link href="/">Home</Link>
            </li>
            <li className={styles.subMenu}>
                <Link href="/#about">About</Link>
            </li>
            <li className={styles.subMenu}>
                <Link href="/#contact">Contact</Link>
            </li>
        </>
    );
};

export default SubMenu;
