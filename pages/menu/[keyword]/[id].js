import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { faker } from "@faker-js/faker";
import { BiStar } from "react-icons/bi";

import { menuData } from "@/data/menuData";

import styles from "@/styles/ProductPage.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Head from "next/head";

import { useSelector, useDispatch } from "react-redux";
import { CLOSE_MENU, TOGGLE_SCROLLING } from "@/redux/reducers/nav";
import MenuItem from "@/components/MenuItem";

const ProductPage = () => {
    const router = useRouter();

    const { keyword, id } = router.query;

    console.log(keyword, id);

    const [item, setItem] = useState("pending");

    // Helper function to generate random Idx value between 0 and length of menu category
    // then 3 items are selected from the category list
    const genRandomSuggestions = () => {
        const randomNums = new Set();

        const suggestions = [...Array(3)].map((elem) => {
            let randomNum = Math.floor(
                Math.random() * menuData[keyword]?.length
            );

            while (randomNums.has(randomNum)) {
                randomNum = Math.floor(
                    Math.random() * menuData[keyword]?.length
                );
            }

            const suggestedItem = {
                id: menuData[keyword][randomNum]?.id,
                item: menuData[keyword][randomNum]?.item,
                description: menuData[keyword][randomNum]?.description,
                price: menuData[keyword][randomNum]?.price,
                rating: 5,
                reviews: 7,
            };

            randomNums.add(randomNum);

            return suggestedItem;
        });

        return suggestions;
    };

    useEffect(() => {
        console.log("menuData at keyword: ", menuData[keyword]);
        const foundItem = menuData[keyword]?.find(
            (elem) => elem.id === Number(id)
        );

        setItem(foundItem);
    }, [keyword, id]);

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

    if (item === "pending") return <div>...Loading</div>;

    if (!item) return <div>Product Not Found</div>;

    console.log("Starters length: ", menuData.starters.length);

    return (
        <>
            <Head>
                <title>
                    Product Page | Valhalla Crossing | Best Casual Dining
                    Experience in Westchester County
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

            {/* header  */}
            <Header>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/#about">About</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/#contact">Contact</a>
                </li>
            </Header>
            <section className={styles.container}>
                <h2>Product Page</h2>
                <div className={styles.menu_content}>
                    <div className={styles.row}>
                        <div className={styles.img_container}>
                            <img src={faker.image.food()} alt="" />
                        </div>
                        <div className={styles.menu_text}>
                            <div className={styles.menu_left}>
                                <h4>{item.item}</h4>
                            </div>
                            <div className={styles.menu_right}>
                                <h5>{item.price}</h5>
                            </div>
                        </div>

                        <p>{item.description}</p>
                        <div className={styles.star_wrapper}>
                            {[...new Array(5)].map((_, idx) => (
                                <a key={idx} href="">
                                    <BiStar className={styles.star} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <h2> Similar items you may like: </h2>

                <div className={styles.container_box}>
                    {genRandomSuggestions()?.map((item, idx) => (
                        <MenuItem key={idx} keyword={keyword} item={item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProductPage;
