import Head from "next/head";
import Link from "next/link";
import styles from "../styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className={styles.error}>

        <Image
          src="/page-not-found.png"
          alt="404"
          width={400}
          height={200}
          className={styles["error__image"]}
        />
        
        <h1>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang anda cari tidak ada</p>

        <Link href="/" className={styles.error__button}>
          Kembali ke Home
        </Link>
      </div>
  );
};

export default Custom404;
