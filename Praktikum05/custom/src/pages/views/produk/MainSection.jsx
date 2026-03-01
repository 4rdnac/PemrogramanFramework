import { useRouter } from "next/router";

const MainSection = () => {
  const { query } = useRouter();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      {query.id ? (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Detail Produk
          </h2>
          <p className="mb-2 text-gray-600">
            Kamu sedang melihat produk dengan ID:{" "}
            <strong className="text-blue-600">{query.id}</strong>
          </p>
          <p className="text-gray-500 leading-relaxed">
            Informasi lengkap mengenai produk ini bisa ditampilkan di sini,
            seperti nama produk, harga, deskripsi, dan lain-lain.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Daftar Produk
          </h2>
          <p className="mb-2 text-gray-600">
            Ini adalah halaman utama produk.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Silakan pilih salah satu produk untuk melihat detailnya.
          </p>
        </>
      )}
    </div>
  );
};

export default MainSection;