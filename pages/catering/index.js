import { useEffect } from "react";
import CateringItem from "@/components/CateringItem";
import Header from "@/components/Header";
import SubMenu from "@/components/SubMenu";
import { menuData } from "@/data/menuData";

import { useSelector, useDispatch } from "react-redux";
import { CLOSE_MENU, TOGGLE_SCROLLING } from "@/redux/reducers/nav";

import styles from "@/styles/Catering.module.css";
import { BiMoney, BiPhone, BiUpArrowAlt, BiWinkSmile } from "react-icons/bi";

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
            <Header>
                <h2 style={{ width: "100%", textAlign: "right" }}>
                    <em>Catering</em>
                </h2>
                <li>
                    <a href="#intro">Welcome</a>
                </li>
                <li>
                    <a href="#buffet">Buffet</a>
                </li>
                <li>
                    <a href="#sides">Sides</a>
                </li>
                <li>
                    <a href="#pricing">Pricing</a>
                </li>

                <SubMenu />
            </Header>

            <section className={styles.container} id="intro">
                <div className={styles.main_text}>
                    <h2>Party Menus</h2>
                    <p>
                        We are happy to sit down with you to custom design your
                        own special menu to suit your taste and budget.
                    </p>
                    <p>
                        Our Culinary Institute of America-trained Executive Chef
                        Ryan can prepare many different dishes. If you would
                        like to arrange a birthday party, business lunch,
                        anniversary party, or any kind of affair, just give us a
                        call and we can make it happen.{" "}
                    </p>

                    <p>
                        Please note that with five cemeteries nearby, we are
                        very experienced in arranging bereavement luncheons and
                        unveilings.{" "}
                    </p>

                    <p>
                        Please call us to discuss luncheon menus. It would be
                        our pleasure to help you organize your event.
                    </p>
                    <br />
                    <h2>
                        <span>To discuss menu options</span>
                    </h2>

                    <a href="tel:+19146824076">
                        <span className={styles.btn}>
                            <BiPhone />
                        </span>
                        <span className={styles.reserve}>
                            Call the restaurant
                        </span>
                    </a>
                    <br />
                    <a href="tel:+19144909447">
                        <span className={styles.btn}>
                            <BiWinkSmile />
                        </span>
                        <span className={styles.reserve}>or Louise</span>
                    </a>
                    <br />
                    <a href="#pricing">
                        <span className={styles.btn}>
                            <BiMoney />
                        </span>
                        <span className={styles.reserve}>see pricing</span>
                    </a>
                </div>
            </section>

            {/* buffet  */}
            <section className={styles.container} id="buffet">
                <div className={styles.main_text}>
                    <h2>Customized Buffet</h2>
                    <p>Select two of the below items as main dish</p>
                </div>

                <br />
                <div className={styles.container_box}>
                    {menuData.catering.items.map((item, idx) => (
                        <CateringItem key={idx} item={item} />
                    ))}
                </div>
            </section>

            {/* sides  */}

            <section className={styles.container} id="sides">
                <div className={styles.main_text}>
                    <h2>Accompaniments</h2>
                    <p>Select two of the below items as sides</p>
                </div>
                <br />
                <div className={styles.container_box}>
                    {menuData.catering.sides.map((item, idx) => (
                        <CateringItem key={idx} item={item} />
                    ))}
                </div>
            </section>

            {/* pricing  */}
            <section className={styles.container} id="pricing">
                <div className={styles.main_text}>
                    <h2>Pricing</h2>
                    <h3>$28.95 per guest, plus tax and gratuity</h3>

                    <p>
                        Includes: Tossed Salad, Bread & Butter, Unlimited
                        Soda/Juice/Coffee/Tea
                    </p>

                    <ul>
                        <li>
                            Minimum of 25 guests (Guaranteed number required 4
                            days prior)
                        </li>
                        <li>No take-home boxes are permitted</li>
                        <li>Alcohol and dessert additional</li>
                        <li>Includes Private Room</li>
                    </ul>

                    <p>
                        If you would like more than four items on your buffet,
                        additional items are $7.50 each per guest from the first
                        group and $4 each per guest from the second group.
                    </p>

                    <p>Sheet cake available at $4 extra per person.</p>
                    <p>
                        Louise or Stan is always available to help you plan your
                        gathering. Please call, email, or stop by.
                    </p>
                </div>
            </section>

            {/* gatzby  */}
            <div className={styles.giph_container}>
                <iframe
                    src="https://giphy.com/embed/8Iv5lqKwKsZ2g"
                    width="380"
                    height="188"
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen
                ></iframe>
            </div>

            {/* scroll top  */}

            <a href="#intro" className={styles.scroll_top}>
                <BiUpArrowAlt />
            </a>
        </>
    );
};

export default index;
