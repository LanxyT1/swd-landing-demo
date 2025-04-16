// Next
import type { AppProps } from "next/app";
// Components
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
// Styles
import "@/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
