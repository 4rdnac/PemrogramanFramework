import { useRouter } from "next/router";
import Navbar from "../navbar";
import { Roboto } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";

const disableNavbar = ["/auth/login", "/auth/register"];

const Footer = dynamic(() => import("../footer"), {
  ssr: false, // optional, biar hanya render di client
  loading: () => <p>Loading footer...</p>,
});

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  const GA_MEASUREMENT_ID = "G-1234567890";

  return (
    <main className={roboto.className}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
         
        `}
      </Script>

      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
