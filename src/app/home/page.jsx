import Hero from "@/components/hero/Hero";
import Products from "@/components/product/Products";
import { getData } from "@/fetch";
import React from "react";

export default async function Home() {
  let data = await getData("products/?limit=8");
  return (
    <main>
      <Hero />
      <Products data={data} />
    </main>
  );
}
