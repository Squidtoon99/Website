import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Header from "./header";
import Link from "next/link";

const name = "Squidtoon99";
export const siteTitle = "Squidtoon99's Bio";

export default function Layout({ children, home }) {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicono.ico" />
          <meta name="description" content="My first website in next.js" />
          <meta
            property="og:image"
            content="https://og-image.vercel.app/Hello%2C%20I'm%20**Squid**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&widths=300"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header className={styles.header}>
          {home ? (
            <>
              <div className="h-32 w-32 relative">
                <Image
                  priority
                  src="/images/profile.jpg"
                  alt={name}
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="rounded-full" // just an example
                />
              </div>
              <h1 className={`text-5xl ${styles.header}`}>{name}</h1>
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
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
