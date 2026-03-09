import Link from "next/link";
import style from "./register.module.css";

const TampilanRegister = () => {
  return (
    <div className={style.register}>
      <h1 className="text-3xl font-bold text-blue-600 ">Halaman Register</h1>
      <br />
      <h1 style={{ color: "red",border:"1px solid red",borderRadius: "5px",padding: "5px",}}>sudah punya akun</h1>
      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default TampilanRegister;