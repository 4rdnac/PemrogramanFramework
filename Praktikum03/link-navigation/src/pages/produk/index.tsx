import { useRouter } from "next/router";
import { useEffect } from "react";

const Produk = () => {
  const { push } = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");

    if (loginStatus !== "true") {
      push("/auth/login");
    }
  }, [push]);

  return (
    <div>
      <h1>Produk User Page</h1>
      <br />
      {/* <button
        onClick={() => {
          localStorage.removeItem("isLogin");
          push("/auth/login");
        }}
      >
        Logout
      </button> */}
    </div>
  );
};

export default Produk;
