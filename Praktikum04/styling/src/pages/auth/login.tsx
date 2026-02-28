import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    // Simulasi login berhasil
    localStorage.setItem("isLogin", "true");

    push("/");
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      <button onClick={handlerLogin}>Login</button> <br />
      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
};

export default HalamanLogin;
