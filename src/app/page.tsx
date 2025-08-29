"use client";

// json
import { useI18n } from "@/context/i18nContext";
// react/next
import Link from "next/link";
// cmp
// import ComButton from "@/components/com/Button";
// import Lnb from "@/components/layout/Lnb";
import Banner from "@/components/main/Banner";
import Category from "@/components/main/Category";
import ItemList from "@/components/item/List";
import Recom from "@/components/main/Recom";
import New from "@/components/main/New";
import Event from "@/components/main/Event";
import Season from "@/components/main/Season";

export default function Home() {
  const { msg, sections, categories, prd1 } = useI18n();

  console.log("prd1", prd1);

  return (
    <>
      <section className="section in">
        <Banner />
      </section>
      <section className="section in">
        <h2 className="title-2 title">{categories.featuredTitle}</h2>
        <Category />
      </section>
      <section className="section in">
        <h2 className="title-2 title">
          {sections.favorites.title}
          <Link className="btn-more btn" href="/">
            {msg.buttons.viewMore}
          </Link>
        </h2>
        <ItemList itemList={prd1} />
      </section>
      <section className="section">
        <Recom />
      </section>
      <section className="section in">
        <New />
      </section>
      <section className="section in">
        <h2 className="title-2 title">
          {msg.event}
          <Link className="btn-more btn" href="/">
            {msg.buttons.viewMore}
          </Link>
        </h2>
        <Event />
      </section>
      <section className="section in">
        <Season />
      </section>
    </>
  );
}
