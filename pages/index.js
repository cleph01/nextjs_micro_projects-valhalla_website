import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { CLOSE_MENU, TOGGLE_SCROLLING } from "../redux/reducers/nav";

import Head from "next/head";
import Image from "next/image";
import dish1 from "../public/images/dish1.png";
import dish2 from "../public/images/dish2.png";
import dish3 from "../public/images/dish3.png";
import dish4 from "../public/images/dish4.png";
import dish5 from "../public/images/dish5.png";

import {
    BiFoodMenu,
    BiPhone,
    BiStar,
    BiTrain,
    BiUpArrowAlt,
} from "react-icons/bi";

import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
    const { scrolling } = useSelector((state) => state.nav);
    const dispatch = useDispatch();

    useEffect(() => {
        const scroll = (window.onscroll = () => {
            dispatch(TOGGLE_SCROLLING(window.scrollY > 100));
            dispatch(CLOSE_MENU());
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

            <Header>
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
                    <Link href="/catering">Catering</Link>
                </li>

                <li>
                    <a href="/contact">Contact</a>
                </li>
            </Header>

            {/* home section  */}

            <section className={styles.home} id="home">
                <div className={styles.home_text}>
                    <h1>
                        <span>History</span> with Every Bite.
                    </h1>
                    <p>
                        Voted Westchester Magazine's "Favorite Local Bar!" for
                        our plentiful portions of great comfort food, the BEST
                        burgers, huge fresh salads, and delicious sandwiches!
                    </p>
                    <p>
                        We are located in the historic Valhalla Train Station on
                        the Taconic Parkway close to the Kensico Dam.
                    </p>
                    <p>
                        Hop into our Victorian Dining Parlour, antique
                        Presidential Car, gourmet caboose, and trackside dining
                        room - and welcome to the best-in-class dining journey
                        this side of the Hudson.
                    </p>
                    <p>All Aboard!</p>

                    <a href="tel:+19143125729">
                        <span className={styles.btn}>
                            <BiPhone />
                        </span>
                        <span className={styles.reserve}> Book a Table</span>
                    </a>
                </div>
                <div className={styles.home_img}>
                    <Image src={dish1} alt="" />
                </div>
            </section>

            {/* container section  */}

            <section className={styles.container}>
                <div className={styles.main_text}>
                    <h2>
                        Our <span>Rail</span> Car Fare
                    </h2>
                    <p className={styles.hours}>
                        Lunch and Dinner served 6 days a week (closed Mondays)
                    </p>{" "}
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
                        <span>Ride</span> Back in
                        <span> Time </span>and Grab a <span>Bite</span>
                    </h2>
                    <div>
                        <p>
                            A converted 1896 Lake Shore & Michigan Southern
                            Railway car, our restaurant is a cozy and charming
                            fit for your transcontinental appetite.
                        </p>
                        <p>
                            Come enjoy a trip down memory lane and grab a
                            cocktail in the original train station building.
                        </p>
                        <p>
                            From the collosal A-frame ceiling and wide-planked
                            floors to our beautiful oak bar built in 1903 for
                            Bronxville’s Hotel Gramatan, you will experience
                            history with every glance.
                        </p>
                    </div>
                </div>
            </section>

            <Link href="/about" style={{ marginLeft: "4%" }}>
                <span className={styles.btn}>
                    <BiTrain />
                </span>{" "}
                <span className={styles.reserve}> About Us</span>
            </Link>

            {/* menu setion  */}

            <section className={styles.menu} id="menu">
                <div className={styles.main_text}>
                    <h2>Most Popular Dishes</h2>

                    <p>
                        Our Executive Chef, Terrence Ryan, has been engineering
                        flawless recipes with tremendous flavor since we first
                        opened in 2005.
                    </p>

                    <p>
                        A graduate of the Culinary Institute of America his
                        range of cuisine covers every appetite.
                    </p>

                    <p>
                        From delicious burgers to his famous Shepherd's Pie,
                        Chef Ryan has you covered
                    </p>
                </div>

                {/* full menu link  */}

                <div style={{ marginTop: "2.5rem" }}>
                    <Link href="/menu">
                        <span className={styles.btn}>
                            <BiFoodMenu />
                        </span>
                        <span className={styles.reserve}> See Full Menu</span>
                    </Link>
                </div>

                <div className={styles.menu_content}>
                    {[dish1, dish2, dish3, dish4, dish5].map((dish, idx) => (
                        <div key={idx} className={styles.row}>
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
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Directions</a>
                        </li>
                        <li>
                            <a href="#">Press Center</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Faqs</a>
                        </li>
                    </div>

                    <div className={styles.contact_content}>
                        <h4>Follow Us</h4>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">YouTube</a>
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
