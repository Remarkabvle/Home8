import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ProductWrapper from "@/components/product/ProductWrapper";
import Product from "./product/page";
import Hero from "@/components/hero/Hero";
import CandleSection from "@/components/CandleSection/CandleSection";

export default function Home() {
  return (
   <div>
     <Hero/>
     <Product/>
     <CandleSection/>
   </div>
  );
}
