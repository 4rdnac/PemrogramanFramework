import { ProductType } from "@/types/Product.type";
import styles from "./detailProduct.module.scss";
import Link from "next/dist/client/link";

const DetailProduk = ({ products }: { products: ProductType }) => {
  return (
    <>
    <h1 className={styles.title}>Detail Produk</h1>
    <div className={styles.produkdetail}>
      <div className={styles.produkdetail__image}>
        <img src={products.image} alt={products.nama} />
      </div>

      <div className={styles.produkdetail__info}>
        <h1 className={styles.produkdetail__name}>{products.nama}</h1>
        <p className={styles.produkdetail__category}>{products.kategori}</p>
        <p className={styles.produkdetail__price}>
          Rp {products.harga && products.harga.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
    </>
  );
};

export default DetailProduk;
