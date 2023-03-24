import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import SubMenu from "@/components/SubMenu";

import { useSelector, useDispatch } from "react-redux";
import { CLOSE_MENU, TOGGLE_SCROLLING } from "@/redux/reducers/nav";

import styles from "@/styles/FullMenu.module.css";

import { BiUpArrowAlt } from "react-icons/bi";

import { menuData } from "../../data/menuData";

import MenuItem from "@/components/MenuItem";

const index = () => {
    console.log("menu data: ", menuData);

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
                    Menu | Valhalla Crossing | Best Casual Dining Experience in
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
                <h2 style={{ width: "100%", textAlign: "right" }}>
                    <em>Menu</em>
                </h2>
                <li>
                    <a href="#starters">Starters</a>
                </li>
                <li>
                    <a href="#entrees">Entrees</a>
                </li>
                <li>
                    <a href="#sandwiches">Sandwiches</a>
                </li>
                <li>
                    <a href="#salads">Salads</a>
                </li>

                <li>
                    <a href="#wraps">Wraps</a>
                </li>
                <li>
                    <a href="#sides">Sides</a>
                </li>
                <li>
                    <a href="#kids">Kids</a>
                </li>

                <SubMenu />
            </Header>

            {/* menu section  */}

            <section className={styles.container} id="starters">
                <h2>Only the Freshest Local Ingredients</h2>
                <p>
                    We pride ourselves on using only the freshest, organic,
                    locally sourced ingredients to create dishes that are as
                    delicious as they are good for you.
                </p>

                {/* starters  */}

                <div className={styles.main_text}>
                    <h2>Starters</h2>
                </div>
                <div className={styles.container_box}>
                    {menuData.starters.map((item, idx) => (
                        <MenuItem key={idx} keyword="starters" item={item} />
                    ))}
                </div>

                {/* entrees  */}

                <div className={styles.main_text} id="entrees">
                    <h2>Entrees</h2>
                </div>
                <div className={styles.container_box}>
                    {menuData.entrees.map((item, idx) => (
                        <MenuItem key={idx} keyword="entrees" item={item} />
                    ))}
                </div>

                {/* Sandwiches  */}

                <div className={styles.main_text} id="sandwiches">
                    <h2>Sandwiches</h2>
                    <p>
                        All sandwiches and burgers are served w. french fries,
                        onion rings, or some of both!
                    </p>
                    <br />
                    <p>
                        You may substitute in place of fries: Sweet Potato Fries
                        OR Waffle Fries for $2.49; Garden Salad or Caesar Salad
                        $2.95; gluten free bun $2, wrap $2.50, wedge $3
                        <br />
                        No charge: Lettuce, Tomato, Red Onion, Pickles, BBQ
                        Sauce, Mayo $.99: Fresh Jalapenos, $.49 Banana Peppers
                    </p>
                </div>
                <div className={styles.container_box}>
                    {menuData.sandwiches.map((item, idx) => (
                        <MenuItem key={idx} keyword="sandwiches" item={item} />
                    ))}
                </div>

                {/* Salads  */}
                <div className={styles.main_text} id="salads">
                    <h2>Salads</h2>
                    <p></p>
                    <br />
                    <p>Add-ons: Chicken +$6, Steak or Shrimp +$9</p>
                </div>
                <div className={styles.container_box}>
                    {menuData.salads.map((item, idx) => (
                        <MenuItem key={idx} keyword="salads" item={item} />
                    ))}
                </div>

                {/* wraps  */}

                <div className={styles.main_text} id="wraps">
                    <h2>Wraps</h2>

                    <p>
                        All wraps are served w. french fries, onion rings, or
                        some of both!
                    </p>
                    <br />
                    <p>
                        You may substitute in place of fries: Sweet Potato
                        Fries, Waffle Fries $2.49; Garden Salad, or Caesar Salad
                        $2.95; gluten free bun $2, wrap $2.50, wedge $3
                    </p>
                </div>
                <div className={styles.container_box}>
                    {menuData.wraps.map((item, idx) => (
                        <MenuItem key={idx} keyword="wraps" item={item} />
                    ))}
                </div>

                {/* sides  */}

                <div className={styles.main_text} id="sides">
                    <h2>Sides</h2>
                </div>
                <div className={styles.container_box}>
                    {menuData.sides.map((item, idx) => (
                        <MenuItem key={idx} keyword="sides" item={item} />
                    ))}
                </div>

                {/* kids  */}

                <div className={styles.main_text} id="kids">
                    <h2>Kids</h2>
                </div>
                <div className={styles.container_box}>
                    {menuData.kids.map((item, idx) => (
                        <MenuItem key={idx} keyword="kids" item={item} />
                    ))}
                </div>
            </section>

            {/* scroll top  */}

            <a href="#starters" className={styles.scroll_top}>
                <BiUpArrowAlt />
            </a>
        </>
    );
};

export default index;
