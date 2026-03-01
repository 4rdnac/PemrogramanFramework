import Head from "next/head";
import styles from "../styles/404.module.scss";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>

      <div className={styles.error}>
        <img
          src="/page-not-found.png"
          alt="404"
          className={styles["error__image"]}
        />
        <h1>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang anda cari tidak ada</p>
      </div>
    </>
  );
};

export default Custom404;