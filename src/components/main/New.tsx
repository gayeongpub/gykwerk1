"use client";

// json
import { useI18n } from "@/context/i18nContext";
// react/next
import Image from "next/image";
import Link from "next/link";
// comp
import MainItemList from "@/components/item/List";

const itemList = [
  {
    link: "/",
    tag: "new",
    src: "11.webp",
    ctgr: "Bitz",
    name: "Staub New White Truffle deep plate, Ø24 cm",
    price: 50,
    oldPrice: 72,
  },
  {
    link: "/",
    tag: "",
    src: "12.webp",
    ctgr: "Bloomingville",
    name: "Freckle side plate Ø20 cm, black",
    price: 80,
    oldPrice: 92,
  },
  {
    link: "/",
    tag: "hot",
    src: "3.webp",
    ctgr: "Done by deer",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 110,
    oldPrice: 110,
  },
  {
    link: "/",
    tag: "sale",
    src: "4.webp",
    ctgr: "Rosenthal",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 110,
    oldPrice: 110,
  },
  {
    link: "/",
    tag: "sale",
    src: "5.webp",
    ctgr: "Villa Collection",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 110,
    oldPrice: 110,
  },
  {
    link: "/",
    tag: "",
    src: "6.webp",
    ctgr: "Seltmann Weiden",
    name: "Dots small plate 22 cm 4-pack, Creamy white",
    price: 275,
    oldPrice: 312,
  },
  {
    link: "/",
    tag: "",
    src: "7.webp",
    ctgr: "Serax",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 320,
    oldPrice: 320,
  },
  {
    link: "/",
    tag: "",
    src: "8.webp",
    ctgr: "Eva Solo",
    name: "Havspil side plate 21 cm 4-pack, blue-white",
    price: 320,
    oldPrice: 320,
  },
  // {
  //   link: "/",
  //   tag: "",
  //   src: "9.webp",
  //   ctgr: "HKliving",
  //   name: "Havspil side plate 21 cm 4-pack, blue-white",
  //   price: 320,
  //   oldPrice: 320,
  // },
  // {
  //   link: "/",
  //   tag: "hot",
  //   src: "10.webp",
  //   ctgr: "Seltmann Weiden",
  //   name: "Havspil side plate 21 cm 4-pack, blue-white",
  //   price: 320,
  //   oldPrice: 320,
  // },
  // {
  //   link: "/",
  //   tag: "new",
  //   src: "13.webp",
  //   ctgr: "Rosenthal",
  //   name: "Havspil side plate 21 cm 4-pack, blue-white",
  //   price: 320,
  //   oldPrice: 320,
  // },
  // {
  //   link: "/",
  //   tag: "",
  //   src: "14.webp",
  //   ctgr: "Alessi",
  //   name: "Havspil side plate 21 cm 4-pack, blue-white",
  //   price: 320,
  //   oldPrice: 320,
  // },
];

export default function New() {
  const { msg, sections } = useI18n();

  return (
    <>
      <div className="flex-area">
        <div className="tit-wrap">
          <h2 className="title-2">
            {sections.newArrivals.title}
            <Link className="btn-more btn rd" href="/">
              {msg.buttons.viewMore}
            </Link>
          </h2>
          <div className="bg-img">
            <Image
              src="/img/main/banner-new-1.webp"
              alt="New Arrival"
              width="800"
              height="1440"
            />
          </div>
        </div>
        <div className="cont-wrap">
          <MainItemList itemList={itemList} colClassName="col-4" />
        </div>
      </div>
    </>
  );
}
