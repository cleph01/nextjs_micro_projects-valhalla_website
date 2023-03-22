import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";

export default function Home() {
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
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        Get started by editing&nbsp; butters kid
                        <code className={styles.code}>pages/index.js</code>
                    </p>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{" "}
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                    <div className={styles.thirteen}>
                        <Image
                            src="/thirteen.svg"
                            alt="13"
                            width={40}
                            height={31}
                            priority
                        />
                    </div>
                </div>

                <div className={styles.grid}>
                    <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Docs <span>-&gt;</span>
                        </h2>
                        <p>
                            Find in-depth information about Next.js features
                            and&nbsp;API.
                        </p>
                    </a>

                    <a
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Learn <span>-&gt;</span>
                        </h2>
                        <p>
                            Learn about Next.js in an interactive course
                            with&nbsp;quizzes!
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Templates <span>-&gt;</span>
                        </h2>
                        <p>
                            Discover and deploy boilerplate example
                            Next.js&nbsp;projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Deploy <span>-&gt;</span>
                        </h2>
                        <p>
                            Instantly deploy your Next.js site to a shareable
                            URL with&nbsp;Vercel.
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}
