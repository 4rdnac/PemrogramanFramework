import Link from "next/link";
import { useRouter } from "next/router";
import style from "./login.module.css";

const HalamanLogin = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    // Simulasi login berhasil
    localStorage.setItem("isLogin", "true");

    push("/");
  };

  return (
    <div className={style.login}>
      <h1>Halaman Login</h1>
      <button onClick={handlerLogin}>Login</button> <br />
      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
};

export default HalamanLogin;
