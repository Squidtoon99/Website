import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Header from "./header";
import Link from "next/link";

const name = "Squidtoon99";
export const siteTitle = "Squidtoon99's Bio";

export default function Layout({ children, home }) {
  return (
    <div
      style={
        home
          ? {
              backgroundImage:
                "url(" +
                `${require("../public/images/backgroundsquid.png")}` +
                ")",
              width: "100%",
              height: "100vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              className: "bg-cover",
            }
          : {}
      }
    >
      <Header />
      <div
        id="scroll-container"
        className={`${styles.container} overflow-y-auto`}
        style={{ height: "80vh" }}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="My first website in next.js" />
          <meta
            property="og:image"
            content="https://og-image.vercel.app/Hello%2C%20I'm%20**Squid**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&widths=300"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header>
          {home ? (
            <>
              <section
                className=" container flex items-center justify-center"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="lg:h-32 lg:w-32 sm:h-16 sm:w-16 md:h-20 md:w-20 relative object-left flex-row">
                 <img src="/images/profile.jpg" className="rounded-full" />
                </div>
                <br />
                <p className="hero-title text-white md:pl-8 text-5xl">
                  Hello, I'm <span className={styles.header}> {name}</span>
                </p>
              </section>
            </>
          ) : (
            <>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/posts">
              <a>← Back to posts</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
