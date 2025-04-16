// Next
import type { AppProps } from "next/app";
import { Manrope } from 'next/font/google'
// Components
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// Styles
import "@/styles/global.scss";

const manrope = Manrope({ subsets: ['latin']});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
