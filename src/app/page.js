import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ProductWrapper from "@/components/product/ProductWrapper";
import Product from "./product/page";
import Hero from "@/components/hero/Hero";
import CandleSection from "@/components/CandleSection/CandleSection";
import Counter from "@/components/counter/Counter";

export default function Home() {
  return (
   <div>
    {/* <Counter/> */}
     <Hero/>
     <Product/>
     <CandleSection/>
   </div>
  );
}
