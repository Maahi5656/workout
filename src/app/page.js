import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Library from "@/components/Library";

export default function Home() {
  return (
    <>
      <Banner />
      <Library />
    </>
  );
}
