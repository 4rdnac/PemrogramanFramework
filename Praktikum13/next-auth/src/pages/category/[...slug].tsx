import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) return null;

  return (
    <div>
      <h1>Category Page</h1>

      <h3>Daftar Kategori:</h3>
      <ul style={{ paddingLeft: 20 }}>
        {Array.isArray(slug) &&
          slug.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}
