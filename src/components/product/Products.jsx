// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = ({ data }) => {
  const card = data?.map((el) => (
    <div key={el.id} className="card">
      <Link href={`/detail/${el.id}`}>
        <Image src={el.image} width={100} height={100} alt={el.title} />
      </Link>
    </div>
  ));
  return (
    <section className="product">
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap" }} className="cards">
          {card}
        </div>
      </div>
    </section>
  );
};

export default Products;
