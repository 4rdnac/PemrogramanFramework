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

  const getData = () => {
    fetch("/api/produk")
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button onClick={getData}>Refresh Data</button>

      {products.map((produk) => (
        <div key={produk.id}>
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