import { useEffect } from "react";

import Header from "@/components/Header";
import SubMenu from "@/components/SubMenu";

import { useSelector, useDispatch } from "react-redux";
import { CLOSE_MENU, TOGGLE_SCROLLING } from "@/redux/reducers/nav";

import styles from "@/styles/About.module.css";
import { BiUpArrowAlt } from "react-icons/bi";
import Head from "next/head";
import Carousel from "@/components/carousel/Carousel";

import { images } from "@/data/imagesData";

const index = () => {
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
                    About Us | Valhalla Crossing | Best Casual Dining Experience
                    in Westchester County
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
            <Header>
                <h2 style={{ width: "100%", textAlign: "right" }}>
                    <em>About</em>
                </h2>
                <li>
                    <a href="#main">Main Room</a>
                </li>
                <li>
                    <a href="#caboose">Caboose</a>
                </li>
                <li>
                    <a href="#track">Track Rooms</a>
                </li>
                <li>
                    <a href="#club">Club Room</a>
                </li>
                <li>
                    <a href="#bar">Bar</a>
                </li>
                <li>
                    <a href="#pres">Presedential Car</a>
                </li>
                <li>
                    <a href="#dining">Dining Rooms</a>
                </li>

                <SubMenu />
            </Header>

            <section className={styles.container} id="gallery">
                {/* main dining room  */}
                <div id="main"></div>
                <Carousel content={images.main} />

                {/* caboose  */}
                <div id="caboose"></div>
                <Carousel content={images.caboose} />

                {/* track room  */}
                <div className="track"></div>
                <Carousel content={images.trackRoom} />

                {/* club room  */}
                <div className="club"></div>
                <Carousel content={images.clubRoom} />

                {/* bar  */}
                <div className="bar"></div>
                <Carousel content={images.bar} />

                {/* presidential car  */}
                <div className="pres"></div>
                <Carousel content={images.presidential} />

                {/* dining rooms  */}
                <div className="dining"></div>
                <Carousel content={images.diningRoom} />
            </section>

            {/* scroll top  */}

            <a href="#gallery" className={styles.scroll_top}>
                <BiUpArrowAlt />
            </a>
        </>
    );
};

export default index;
