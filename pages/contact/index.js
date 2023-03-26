import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import styles from "@/styles/Contact.module.css";

const index = () => {
    return (
        <>
            <Head>
                <title>
                    Contact Us | Valhalla Crossing | Best Casual Dining
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
            </Head>
            <Header>
                <h2 style={{ width: "100%", textAlign: "right" }}>
                    <em>Contact</em>
                </h2>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/menu">Menu</Link>
                </li>
                <li>
                    <Link href="/catering">Catering</Link>
                </li>

                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </Header>

            <section className={styles.container} id="intro">
                <div className={styles.main_text}>
                    <h2>
                        Looking <span>Forward</span> to Seeing You
                    </h2>
                    <p>
                        You can contact us at the Valhalla Crossing by calling
                        (914) 682-4076 or by email at valhallacrossing@aol.com.
                    </p>
                    <p>Feel free to stop by anytime to visit us personally!</p>
                    <p>
                        We are open for business from 11:30AM each day to 9PM on
                        Sunday and Monday, 10PM Tuesday through Saturday. We
                        look forward to hearing from you!
                    </p>
                </div>
                <div className={styles.call}>
                    <a href="tel:+19146824076">
                        <span className={styles.btn}>
                            <BiPhone />
                        </span>
                        <span className={styles.reserve}>
                            Call the restaurant
                        </span>
                    </a>
                </div>

                <div className={styles.email}>
                    <a href="mailto:valhallacrossing@aol.com">
                        <span className={styles.btn}>
                            <BiEnvelope />
                        </span>
                        <span className={styles.reserve}>Email Us</span>
                    </a>
                </div>
            </section>
            <section className={styles.map}>
                <div className={styles.main_text}>
                    <h2>
                        Click <span>Map</span> for Directions
                    </h2>
                </div>
                <center>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8062994330517!2d-73.7750566493796!3d41.073226523273476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2958d1205e1f1%3A0x3c43cd59f312a3c8!2sValhalla%20Crossing!5e0!3m2!1sen!2sus!4v1679667083336!5m2!1sen!2sus"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        width="100%"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </center>
            </section>
        </>
    );
};

export default index;
