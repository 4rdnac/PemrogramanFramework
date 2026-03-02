import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  harga: number;
  ukuran: string;
  category: string;
};

const MainSection = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("/api/produk")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div>
      {products.map((produk: ProductType) => (
        <div key={produk.id} className="border p-4 rounded shadow">
          <h3>{produk.name}</h3>
          <p>Harga: Rp {produk.harga.toLocaleString()}</p>
          <p>Ukuran: {produk.ukuran}</p>
          <p>Kategori: {produk.category}</p>
        </div>
      ))}
    </div>
  );
};

export default MainSection;
