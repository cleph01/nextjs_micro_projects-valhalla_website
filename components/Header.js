import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_MENU } from "../redux/reducers/nav";

import { BiSearchAlt2, BiCart, BiMenu, BiX } from "react-icons/bi";

import styles from "@/styles/Header.module.css";
import Link from "next/link";

const Header = ({ children }) => {
    const { openMenu, scrolling } = useSelector((state) => state.nav);
    const dispatch = useDispatch();

    const handleMenuClick = () => {
        dispatch(TOGGLE_MENU());
    };
    console.log("state: ", openMenu, scrolling);
    return (
        <header
            className={`${styles.header} ${scrolling ? styles.sticky : ""}`}
            id="header"
        >
            <Link href="/" className={styles.logo}>
                Valhalla<span>Crossing</span>
            </Link>

            <ul className={`${styles.navbar} ${openMenu ? styles.open : ""}`}>
                {children}
            </ul>

            <div className={styles.h_icons}>
                <a href="#">
                    <BiSearchAlt2 />
                </a>
                <a href="#">
                    <BiCart />
                </a>
                <div id="menu_icon">
                    {openMenu ? (
                        <BiX onClick={() => handleMenuClick()} />
                    ) : (
                        <BiMenu onClick={() => handleMenuClick()} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
