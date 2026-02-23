import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AppShell from "@/components/layouts/Appshell";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname, replace } = useRouter();

  const authPages = ["/auth/login", "/auth/register"];
  const isAuthPage = authPages.includes(pathname);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin && !isAuthPage) {
      replace("/auth/login");
    }
  }, [isAuthPage, replace]);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    replace("/auth/login");
  };

  return (
    <div>
      <AppShell>
        <Component {...pageProps} />
        {!isAuthPage && (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </AppShell>
    </div>
  );
}
