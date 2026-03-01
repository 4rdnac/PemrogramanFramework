import { useRouter } from "next/router";
import { useEffect } from "react";
import HeroSection from "../views/produk/HeroSection";
import MainSection from "../views/produk/MainSection";

const ProdukView = () => {
  const { push } = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");

    if (loginStatus !== "true") {
      push("/auth/login");
    }
  }, [push]);

  return (
    <>
      <HeroSection />
      <MainSection />
    </>
  );
};

export default ProdukView;
