import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import dish1 from "../public/images/dish1.png";
import dish2 from "../public/images/dish2.png";
import dish3 from "../public/images/dish3.png";
import dish4 from "../public/images/dish4.png";
import dish5 from "../public/images/dish5.png";

import {
    BiSearchAlt2,
    BiCart,
    BiMenu,
    BiPhone,
    BiStar,
    BiUpArrowAlt,
    BiX,
} from "react-icons/bi";

import styles from "@/styles/Home.module.css";

export default function Home() {
    const [scrolling, setScrolling] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
    };

    useEffect(() => {
        const scroll = (window.onscroll = () => {
            setScrolling(window.scrollY > 100);
            setOpenMenu(false);
        });

        return () => {
            scroll();
        };
    }, []);

    return (
        <>
            <Head>
                <title>
                    Valhalla Crossing | Best Casual Dining Experience in
                    Westchester County
                </title>
                <meta
                    name="description"
                    content="Valhalla Crossing caters great food in local Valhalla, New York. Choose a location for your party - the authentic caboose, the formal presedential car, the fun trackside room, or the entire bar. We can design a menu for you that will suit all your needs."
                />
                <meta
                    name="keywords"
                    content="valhalla crossing restaurant catering food local restaurant pub new york american train station party private rooms"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/profile.jpg" />
            </Head>

            {/* header section  */}

            <header
                className={`${styles.header} ${scrolling ? styles.sticky : ""}`}
                id="header"
            >
                <a href="#" className={styles.logo}>
                    Valhalla<span>Crossing</span>
                </a>

                <ul
                    className={`${styles.navbar} ${
                        openMenu ? styles.open : ""
                    }`}
                >
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#menu">Menu</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
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

            {/* home section  */}

            <section className={styles.home} id="home">
                <div className={styles.home_text}>
                    <h1>
                        <span>Experience</span> History with Every Bite.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta aut, vitae veritatis eligendi molestiae ex libero.
                    </p>
                    <a href="tel:+19143125729" className={styles.btn}>
                        <BiPhone />
                    </a>
                    <span className={styles.reserve}> Book a Table</span>
                </div>
                <div className={styles.home_img}>
                    <Image src={dish1} alt="" />
                </div>
            </section>

            {/* container section  */}

            <section className={styles.container}>
                <div className={styles.main_text}>
                    <h2>Breakfast</h2>
                    <p>9.00 am - 11.00 am</p>
                </div>
                <div className={styles.container_box}>
                    {[dish1, dish2, dish3, dish4, dish5].map((dish, idx) => (
                        <div key={idx} className={styles.c_mainbx}>
                            <div className={styles.container_img}>
                                <Image
                                    src={dish}
                                    alt=""
                                    width="50"
                                    height="50"
                                />
                            </div>
                            <div className={styles.container_text}>
                                <p>Tasty & Fresh Food</p>
                                <p className={styles.subtext}>
                                    Lorem ipsum dolor sit amet
                                </p>
                                <p className={styles.subtext}>
                                    adipisicing elit. Iure distinctio
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* about section  */}

            <section className={styles.about} id="about">
                <div className={styles.about_img}>
                    <Image src={dish1} alt="" />
                </div>
                <div className={styles.about_text}>
                    <h2>
                        The <span>Healthy</span> Food for a
                        <span> Healthy </span>
                        Mood.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, dolorem? Est, dolores deleniti modi ratione
                        quam expedita libero dicta veritatis voluptatem quia hic
                        aliquam nemo, debitis corporis exercitationem
                        repellendus quisquam.
                    </p>
                </div>
            </section>

            <a
                href="tel:+19143125729"
                className={styles.btn}
                style={{ marginLeft: "4%" }}
            >
                <BiPhone />
            </a>
            <span className={styles.reserve}> Book a Table</span>

            {/* menu setion  */}

            <section className={styles.menu} id="menu">
                <div className={styles.main_text}>
                    <h2>Most Popular Dishes</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Voluptate soluta ipsum consectetur.
                    </p>
                </div>
                <div className={styles.menu_content}>
                    {[dish1, dish2, dish3, dish4, dish5].map((dish, idx) => (
                        <div kay={idx} className={styles.row}>
                            <div className={styles.img_container}>
                                <Image src={dish} alt="" />
                            </div>
                            <div className={styles.menu_text}>
                                <div className={styles.menu_left}>
                                    <h4>Saumon Gravlax</h4>
                                </div>
                                <div className={styles.menu_right}>
                                    <h5>$15</h5>
                                </div>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis facilis voluptate
                                deleniti.
                            </p>
                            <div className={styles.star_wrapper}>
                                {[...new Array(5)].map((_, idx) => (
                                    <a key={idx} href="">
                                        <BiStar className={styles.star} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* contact  */}

            <section className={styles.contact} id="contact">
                <div className={styles.main_contact}>
                    <div className={styles.contact_content}>
                        <h4>Services</h4>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </div>
                    <div className={styles.contact_content}>
                        <h4>Contact</h4>
                        <li>
                            <a href="#home">Contact Us</a>
                        </li>
                        <li>
                            <a href="#about">Press Center</a>
                        </li>
                        <li>
                            <a href="#menu">Careers</a>
                        </li>
                        <li>
                            <a href="#contact">Faq</a>
                        </li>
                    </div>
                    <div className={styles.contact_content}>
                        <h4>Follow Us</h4>
                        <li>
                            <a href="#home">Contact Us</a>
                        </li>
                        <li>
                            <a href="#about">Press Center</a>
                        </li>
                        <li>
                            <a href="#menu">Careers</a>
                        </li>
                        <li>
                            <a href="#contact">Faq</a>
                        </li>
                    </div>
                    <div className={styles.contact_content}>
                        <h4>Follow Us</h4>
                        <li>
                            <a href="#home">Facebook</a>
                        </li>
                        <li>
                            <a href="#about">Instagram</a>
                        </li>
                        <li>
                            <a href="#menu">Careers</a>
                        </li>
                    </div>
                </div>
            </section>

            {/* copyright  */}

            <div className={styles.copyright}>
                <p>
                    &copy; 2023 Valhalla Crossing. All Rights Reserved.
                    <br />
                    Designed by Charles Montoya
                </p>
            </div>

            {/* scroll top  */}

            <a href="#home" className={styles.scroll_top}>
                <BiUpArrowAlt />
            </a>
        </>
    );
}
